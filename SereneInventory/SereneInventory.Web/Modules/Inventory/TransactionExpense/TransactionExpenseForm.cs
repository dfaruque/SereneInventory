
namespace SereneInventory.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.TransactionExpense")]
    [BasedOnRow(typeof(Entities.TransactionExpenseRow), CheckNames = true)]
    public class TransactionExpenseForm
    {
        //public Int64 TransactionId { get; set; }
        public Int32 ExpenseType { get; set; }
        public Decimal Amount { get; set; }
    }
}