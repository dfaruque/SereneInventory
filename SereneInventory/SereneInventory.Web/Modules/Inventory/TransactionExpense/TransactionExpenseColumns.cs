
namespace SereneInventory.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.TransactionExpense")]
    [BasedOnRow(typeof(Entities.TransactionExpenseRow), CheckNames = true)]
    public class TransactionExpenseColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int64 Id { get; set; }
        //public String TransactionTransactionNumber { get; set; }
        public Int32 ExpenseType { get; set; }
        public Decimal Amount { get; set; }
    }
}