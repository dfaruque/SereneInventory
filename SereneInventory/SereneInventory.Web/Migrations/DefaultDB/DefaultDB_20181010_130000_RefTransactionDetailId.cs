using FluentMigrator;

namespace SereneInventory.Migrations.DefaultDB
{
    [Migration(20181010_130000)]
    public class DefaultDB_20181010_130000_RefTransactionDetailId : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("TransactionDetail")
                .AddColumn("RefTransactionDetailId").AsInt64().Nullable();

        }
    }
}