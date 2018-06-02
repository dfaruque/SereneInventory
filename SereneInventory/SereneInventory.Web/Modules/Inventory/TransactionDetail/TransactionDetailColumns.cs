
namespace SereneInventory.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.TransactionDetail")]
    [BasedOnRow(typeof(Entities.TransactionDetailRow), CheckNames = true)]
    public class TransactionDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int64 Id { get; set; }
        public Int64 ProductId { get; set; }
        public DateTime Quantity { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Amount { get; set; }
        public Int64 TenantId { get; set; }
    }
}