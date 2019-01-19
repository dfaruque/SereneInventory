namespace SereneInventory
{
    using FluentMigrator.Runner.Announcers;
    using FluentMigrator.Runner.Initialization;
    using Serenity.Data;
    using System;
    using System.Data.SqlClient;
    using System.IO;
    using System.Linq;
    using System.Reflection;
    using System.Web.Hosting;

    public static partial class SiteInitialization
    { 
        private static string[] databaseKeys = new[] {
            "Default"
        };

        public static bool SkippedMigrations { get; private set; }

        private static void RunMigrations(string databaseKey)
        {
            var cs = SqlConnections.GetConnectionString(databaseKey);
            var connection = cs.ConnectionString;

            string serverType = cs.Dialect.ServerType;
            bool isSqlServer = serverType.StartsWith("SqlServer", StringComparison.OrdinalIgnoreCase);
            bool isOracle = !isSqlServer && serverType.StartsWith("Oracle", StringComparison.OrdinalIgnoreCase);

            // safety check to ensure that we are not modifying an arbitrary database.
            // remove these lines if you want SereneInventory migrations to run on your DB.
            ////if (!isOracle && cs.ConnectionString.IndexOf(typeof(SiteInitialization).Namespace +
            ////        @"_" + databaseKey + "_v1", StringComparison.OrdinalIgnoreCase) < 0)
            ////{
            ////    SkippedMigrations = true;
            ////    return;
            ////}

            string databaseType = isOracle ? "OracleManaged" : serverType;
            var connectionString = cs.ConnectionString;

            using (var sw = new StringWriter())
            {
                Announcer announcer = isOracle ?
                    new TextWriterAnnouncer(sw) { ShowSql = true } :
                    new TextWriterWithGoAnnouncer(sw) { ShowSql = true };

                var runner = new RunnerContext(announcer)
                {
                    Database = databaseType,
                    Connection = connectionString,
                    Targets = new string[] { typeof(SiteInitialization).Assembly.Location },
                    Task = "migrate:up",
                    WorkingDirectory = Path.GetDirectoryName(typeof(SiteInitialization).Assembly.Location),
                    Namespace = "SereneInventory.Migrations." + databaseKey + "DB",
                    Timeout = 90
                };

                try
                {
                    new TaskExecutor(runner).Execute();
                }
                catch (Exception ex)
                {
                    throw new Exception("Error executing migration:\r\n" +
                        sw.ToString(), ex);
                }
            }
        }
    }
}
