
namespace SereneInventory.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.Party")]
    [BasedOnRow(typeof(Entities.PartyRow), CheckNames = true)]
    public class PartyForm
    {
        public Int32 PartyType { get; set; }
        public String Name { get; set; }
        public String Address { get; set; }
        public String Contact { get; set; }
        public Int64 TenantId { get; set; }
    }
}