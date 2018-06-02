
namespace SereneInventory.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Entities;

    [FormScript("Inventory.Transaction")]
    [BasedOnRow(typeof(Entities.TransactionRow), CheckNames = true)]
    public class TransactionForm
    {
        public TransactionType TransactionType { get; set; }
        public Int64 RefTransactionId { get; set; }
        public String TransactionNumber { get; set; }
        public DateTime TransactionDate { get; set; }
        public Int64 PartyId { get; set; }
        public Int64 TenantId { get; set; }

        public List<TransactionDetailRow> TransactionDetailRows { get; set; }
    }
}