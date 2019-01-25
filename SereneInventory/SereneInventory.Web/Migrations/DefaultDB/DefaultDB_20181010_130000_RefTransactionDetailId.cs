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

    [Migration(20190125_130000)]
    public class DefaultDB_20181010_130000_TransactionExpense : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("TransactionExpense", "Id", s => s

                .WithColumn("TransactionId").AsInt64().NotNullable().ForeignKey("Transaction", "Id")
                .WithColumn("ExpenseType").AsInt32().Nullable()
                .WithColumn("Amount").AsDecimal().NotNullable()
                .CommonFields()
            
                );

        }
    }
}