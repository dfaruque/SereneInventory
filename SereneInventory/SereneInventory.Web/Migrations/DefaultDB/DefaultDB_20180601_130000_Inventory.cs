using FluentMigrator;

namespace SereneInventory.Migrations.DefaultDB
{
    [Migration(20180601130000)]
    public class DefaultDB_20180601_130000_Inventory : AutoReversingMigration
    {
        public override void Up()
        {
            this.CreateTableWithId64("Product", "Id", s => s
                .WithColumn("Name").AsGuid().NotNullable()
                .WithColumn("Description").AsString(50).NotNullable());

            
        }
    }
}