
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
    using Serenity.Data.Mapping;

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
        [LookupEditor(typeof(SuppliesLookup), InplaceAdd = true)]
        public Int64 TenantId { get; set; }

        [Category("Transaction Details")]
        public List<TransactionDetailRow> TransactionDetailRows { get; set; }

        [Category("Expenses")]
        [HalfWidth]
        public List<TransactionExpenseRow> TransactionExpenseRows { get; set; }
        [DisplayName("Expense per Piece"), HalfWidth, OneWay, NotMapped, ReadOnly(true)]
        public decimal ExpensePerPiece { get; set; }
        [DisplayName("Total Sales Amount"), HalfWidth, OneWay, NotMapped, ReadOnly(true)]
        public Decimal TotalRefferencedAmount { get; set; }

        //[Category("Related Transactions")]
        //public List<TransactionRow> RelatedTransactionRows { get; set; }

        //public Int64 RemainingQuantity { get; set; }

    }
}