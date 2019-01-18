
namespace SereneInventory.Setup.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Setup.Product")]
    [BasedOnRow(typeof(Entities.ProductRow), CheckNames = true)]
    public class ProductForm
    {
        public String Name { get; set; }
        public String Code { get; set; }
        //public Int32 ProductType { get; set; }
        public Int64 ProductCategoryId { get; set; }
        public String Description { get; set; }
        public String Images { get; set; }
        public Int64 TenantId { get; set; }
    }
}