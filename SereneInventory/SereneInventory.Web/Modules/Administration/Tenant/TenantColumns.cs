
namespace SereneInventory.Administration.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Administration.Tenant")]
    [BasedOnRow(typeof(Entities.TenantRow), CheckNames = true)]
    public class TenantColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
        public Int64 TenantId { get; set; }
    }
}