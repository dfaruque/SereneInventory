
namespace SereneInventory.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.Transaction")]
    [BasedOnRow(typeof(Entities.TransactionRow), CheckNames = true)]
    public class TransactionColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int64 Id { get; set; }
        public Int32 TransactionType { get; set; }
        public String RefTransactionTransactionNumber { get; set; }
        [EditLink]
        public String TransactionNumber { get; set; }
        public DateTime TransactionDate { get; set; }
        public Int64 PartyId { get; set; }
        public Int64 TenantId { get; set; }
    }
}