
namespace SereneInventory.Setup.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Setup.ProductCategory")]
    [BasedOnRow(typeof(Entities.ProductCategoryRow), CheckNames = true)]
    public class ProductCategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden]
        public Int64 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public String Description { get; set; }
        public Int64 TenantId { get; set; }
    }
}