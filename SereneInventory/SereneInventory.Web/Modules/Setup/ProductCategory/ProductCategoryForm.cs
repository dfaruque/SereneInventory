
namespace SereneInventory.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.ProductCategory")]
    [BasedOnRow(typeof(Entities.ProductCategoryRow), CheckNames = true)]
    public class ProductCategoryForm
    {
        public String Name { get; set; }
        public String Description { get; set; }
        public Int64 TenantId { get; set; }
    }
}