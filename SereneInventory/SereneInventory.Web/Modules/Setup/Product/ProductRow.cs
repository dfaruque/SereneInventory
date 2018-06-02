namespace SereneInventory.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Product]")]
    [DisplayName("Product"), InstanceName("Product"), TwoLevelCached]
    [ReadPermission("Setup:Product:Read")]
    [InsertPermission("Setup:Product:Insert")]
    [UpdatePermission("Setup:Product:Update")]
    [DeletePermission("Setup:Product:Delete")]
    public sealed class ProductRow : NRow, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int64? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
		public partial class RowFields { public Int64Field Id; }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
		public partial class RowFields { public StringField Name; }

        [DisplayName("Product Type")]
        public Int32? ProductType { get { return Fields.ProductType[this]; } set { Fields.ProductType[this] = value; } }
		public partial class RowFields { public Int32Field ProductType; }

        [DisplayName("Product Category Id")]
        public Int64? ProductCategoryId { get { return Fields.ProductCategoryId[this]; } set { Fields.ProductCategoryId[this] = value; } }
		public partial class RowFields { public Int64Field ProductCategoryId; }

        [DisplayName("Description"), Size(500)]
        public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
		public partial class RowFields { public StringField Description; }

        [DisplayName("Images"), Size(500)]
        public String Images { get { return Fields.Images[this]; } set { Fields.Images[this] = value; } }
		public partial class RowFields { public StringField Images; }

        [DisplayName("Tenant Id")]
        public Int64? TenantId { get { return Fields.TenantId[this]; } set { Fields.TenantId[this] = value; } }
		public partial class RowFields { public Int64Field TenantId; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.Id; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductRow() : base(Fields) { }

		public partial class RowFields : NRowFields { }
    }
}