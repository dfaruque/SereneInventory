namespace SereneInventory.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[ProductCategory]")]
    [DisplayName("Product Category"), InstanceName("Product Category"), TwoLevelCached]
    [ReadPermission("Setup:ProductCategory:Read")]
    [InsertPermission("Setup:ProductCategory:Insert")]
    [UpdatePermission("Setup:ProductCategory:Update")]
    [DeletePermission("Setup:ProductCategory:Delete")]
    [LookupScript]
    public sealed class ProductCategoryRow : NRow, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int64? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
		public partial class RowFields { public Int64Field Id; }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
		public partial class RowFields { public StringField Name; }

        [DisplayName("Description"), Size(500)]
        public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
		public partial class RowFields { public StringField Description; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.Id; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductCategoryRow() : base(Fields) { }

		public partial class RowFields : NRowFields { }
    }
}