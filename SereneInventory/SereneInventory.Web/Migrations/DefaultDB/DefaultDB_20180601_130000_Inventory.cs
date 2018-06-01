using FluentMigrator;

namespace SereneInventory.Migrations.DefaultDB
{
    [Migration(20180601130000)]
    public class DefaultDB_20180601_130000_Inventory : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("Product", "Id", s => s
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("ProductType").AsInt32().Nullable()
                .WithColumn("ProductCategory").AsInt32().Nullable()
                .WithColumn("Description").AsString(500).Nullable()
                .WithColumn("Images").AsString(500).Nullable()
                .CommonFields());

            this.CreateTableWithId64("Party", "Id", s => s
                .WithColumn("PartyType").AsInt32().NotNullable()
                .WithColumn("Name").AsString(100).NotNullable()
                .WithColumn("Address").AsString(500).Nullable()
                .WithColumn("Contact").AsString(500).Nullable()
                .CommonFields());

            this.CreateTableWithId64("Transaction", "Id", s => s
                .WithColumn("TransactionType").AsInt32().NotNullable()
                .WithColumn("RefTransactionId").AsInt64().Nullable().ForeignKey("Transaction", "Id")
                .WithColumn("TransactionNumber").AsString(50).NotNullable()
                .WithColumn("TransactionDate").AsDateTime().NotNullable()
                .WithColumn("PartyId").AsInt64().Nullable().ForeignKey()
                .CommonFields());

            this.CreateTableWithId64("TransactionDetail", "Id", s => s
                .WithColumn("TransactionId").AsInt64().NotNullable().ForeignKey()
                .WithColumn("ProductId").AsInt64().NotNullable().ForeignKey()
                .WithColumn("Quantity").AsDateTime().NotNullable()
                .WithColumn("UnitPrice").AsDecimal().NotNullable()
                .WithColumn("Amount").AsDecimal().NotNullable()
                .CommonFields());

        }
    }
}