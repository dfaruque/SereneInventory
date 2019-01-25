
namespace SereneInventory.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.PurchaseInvoice")]
    [BasedOnRow(typeof(Entities.TransactionRow), CheckNames = true)]
    public class PurchaseInvoiceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int64 Id { get; set; }
        [Hidden]
        public TransactionType TransactionType { get; set; }
        [EditLink]
        public String TransactionNumber { get; set; }
        //public String RefTransactionTransactionNumber { get; set; }
        public DateTime TransactionDate { get; set; }
        [Width(200, Min = 150)]
        public Int64 PartyId { get; set; }
        public Decimal TotalQuantity { get; set; }
        public Decimal TotalAmount { get; set; }
        public Decimal RemainingQuantity { get; set; }
        public Int64 TenantId { get; set; }
    }
}