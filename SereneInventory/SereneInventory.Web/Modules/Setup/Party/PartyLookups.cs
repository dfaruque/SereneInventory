namespace SereneInventory.Inventory.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Setup.Entities;

    [LookupScript]
    public class CustomerLookup : RowLookupScript<PartyRow>
    {
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            query.Where(PartyRow.Fields.PartyType == (int)PartyType.Customer);
        }
    }

    [LookupScript]
    public class SuppliesLookup : RowLookupScript<PartyRow>
    {
        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            query.Where(PartyRow.Fields.PartyType == (int)PartyType.Supplier);
        }
    }
}