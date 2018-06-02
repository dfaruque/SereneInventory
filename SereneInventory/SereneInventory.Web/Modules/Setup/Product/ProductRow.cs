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
    [LookupScript]
    public sealed class ProductRow : NRow, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int64? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
        public partial class RowFields { public Int64Field Id; }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
        public partial class RowFields { public StringField Name; }

        [DisplayName("Product Type")]
        public ProductType? ProductType { get { return (ProductType?)Fields.ProductType[this]; } set { Fields.ProductType[this] = (Int32?)value; } }
        public partial class RowFields { public Int32Field ProductType; }

        [DisplayName("Product Category"), ForeignKey("[dbo].[ProductCategory]", "Id"), LeftJoin("jProductCategory"), TextualField("ProductCategoryName")]
        [LookupEditor(typeof(ProductCategoryRow), InplaceAdd = true)]
        public Int64? ProductCategoryId { get { return Fields.ProductCategoryId[this]; } set { Fields.ProductCategoryId[this] = value; } }
        public partial class RowFields { public Int64Field ProductCategoryId; }

        [DisplayName("Description"), Size(500)]
        public String Description { get { return Fields.Description[this]; } set { Fields.Description[this] = value; } }
        public partial class RowFields { public StringField Description; }

        [DisplayName("Images"), Size(500)]
        public String Images { get { return Fields.Images[this]; } set { Fields.Images[this] = value; } }
        public partial class RowFields { public StringField Images; }

        #region Foreign Fields


        [DisplayName("Product Category Name"), Expression("jProductCategory.[Name]")]
        public String ProductCategoryName { get { return Fields.ProductCategoryName[this]; } set { Fields.ProductCategoryName[this] = value; } }
        public partial class RowFields { public StringField ProductCategoryName; }

        [DisplayName("Product Category Description"), Expression("jProductCategory.[Description]")]
        public String ProductCategoryDescription { get { return Fields.ProductCategoryDescription[this]; } set { Fields.ProductCategoryDescription[this] = value; } }
        public partial class RowFields { public StringField ProductCategoryDescription; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.Id; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductRow() : base(Fields) { }

        public partial class RowFields : NRowFields { }
    }
}