using FluentMigrator;

namespace SereneInventory.Migrations.DefaultDB
{
    [Migration(20180601110000)]
    public class DefaultDB_20180601_110000_Tenant : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("Tenant", "Id", s => s
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("Description").AsString(500).Nullable()
                .CommonFields());

        }
    }
}