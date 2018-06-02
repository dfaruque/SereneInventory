
namespace SereneInventory.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.TransactionDetail")]
    [BasedOnRow(typeof(Entities.TransactionDetailRow), CheckNames = true)]
    public class TransactionDetailForm
    {
        public Int64 ProductId { get; set; }
        public DateTime Quantity { get; set; }
        public Decimal UnitPrice { get; set; }
        public Decimal Amount { get; set; }
        public Int64 TenantId { get; set; }
    }
}