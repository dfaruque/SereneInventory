
namespace SereneInventory.Setup.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Setup.Party")]
    [BasedOnRow(typeof(Entities.PartyRow), CheckNames = true)]
    public class PartyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int64 Id { get; set; }
        public PartyType PartyType { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Address { get; set; }
        public String Contact { get; set; }
        public Int64 TenantId { get; set; }
    }
}