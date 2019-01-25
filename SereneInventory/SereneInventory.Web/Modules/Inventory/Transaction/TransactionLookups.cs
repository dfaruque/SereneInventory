namespace SereneInventory.Inventory.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Serenity.Web;
    using Setup.Entities;
    using System;
    using System.ComponentModel;
    using System.IO;

    [LookupScript]
    public class PurchaseInvoiceLookup : RowLookupScript<TransactionRow>
    {
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            query.Where(TransactionRow.Fields.TransactionType == (int)TransactionType.PurchaseInvoice);
        }
    }
}