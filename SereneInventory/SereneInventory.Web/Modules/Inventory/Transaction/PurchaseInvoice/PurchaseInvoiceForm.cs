
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

    [FormScript("Inventory.PurchaseInvoice")]
    [BasedOnRow(typeof(Entities.TransactionRow), CheckNames = true)]
    public class PurchaseInvoiceForm
    {
        [Hidden]
        public TransactionType TransactionType { get; set; }
        //public Int64 RefTransactionId { get; set; }
        [HalfWidth]
        public String TransactionNumber { get; set; }
        [HalfWidth]
        public DateTime TransactionDate { get; set; }
        public Int64 PartyId { get; set; }
        public Int64 TenantId { get; set; }

        [Category("Transaction Details")]
        public List<TransactionDetailRow> TransactionDetailRows { get; set; }

        [Category("Expenses")]
        public List<TransactionExpenseRow> TransactionExpenseRows { get; set; }

        //[Category("Related Transactions")]
        //public List<TransactionRow> RelatedTransactionRows { get; set; }

        //public Int64 RemainingQuantity { get; set; }

    }
}