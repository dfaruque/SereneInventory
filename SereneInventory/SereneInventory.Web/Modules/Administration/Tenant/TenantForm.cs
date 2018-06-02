
namespace SereneInventory.Administration.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Administration.Tenant")]
    [BasedOnRow(typeof(Entities.TenantRow), CheckNames = true)]
    public class TenantForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
        public Int64 TenantId { get; set; }
    }
}