namespace SereneInventory.Inventory.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Setup.Entities;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[TransactionDetail]")]
    [DisplayName("Transaction Detail"), InstanceName("Transaction Detail"), TwoLevelCached]
    [ReadPermission("Inventory:TransactionDetail:Read")]
    [InsertPermission("Inventory:TransactionDetail:Insert")]
    [UpdatePermission("Inventory:TransactionDetail:Update")]
    [DeletePermission("Inventory:TransactionDetail:Delete")]
    public sealed class TransactionDetailRow : NRow, IIdRow
    {

        [DisplayName("Id"), Identity]
        public Int64? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
        public partial class RowFields { public Int64Field Id; }

        [DisplayName("Transaction"), NotNull, ForeignKey("[dbo].[Transaction]", "Id"), LeftJoin("jTransaction"), TextualField("TransactionTransactionNumber")]
        public Int64? TransactionId { get { return Fields.TransactionId[this]; } set { Fields.TransactionId[this] = value; } }
        public partial class RowFields { public Int64Field TransactionId; }

        [DisplayName("Product"), NotNull, ForeignKey("[dbo].[Product]", "Id"), LeftJoin("jProduct"), TextualField("ProductName")]
        [LookupEditor(typeof(ProductRow), InplaceAdd = true)]
        public Int64? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
        public partial class RowFields { public Int64Field ProductId; }

        [DisplayName("Quantity"), NotNull]
        public DateTime? Quantity { get { return Fields.Quantity[this]; } set { Fields.Quantity[this] = value; } }
        public partial class RowFields { public DateTimeField Quantity; }

        [DisplayName("Unit Price"), Size(19), Scale(5), NotNull]
        public Decimal? UnitPrice { get { return Fields.UnitPrice[this]; } set { Fields.UnitPrice[this] = value; } }
        public partial class RowFields { public DecimalField UnitPrice; }

        [DisplayName("Amount"), Size(19), Scale(5), NotNull]
        public Decimal? Amount { get { return Fields.Amount[this]; } set { Fields.Amount[this] = value; } }
        public partial class RowFields { public DecimalField Amount; }

        #region Foreign Fields


        [DisplayName("Transaction Transaction Type"), Expression("jTransaction.[TransactionType]")]
        public Int32? TransactionTransactionType { get { return Fields.TransactionTransactionType[this]; } set { Fields.TransactionTransactionType[this] = value; } }
        public partial class RowFields { public Int32Field TransactionTransactionType; }

        [DisplayName("Transaction Ref Transaction Id"), Expression("jTransaction.[RefTransactionId]")]
        public Int64? TransactionRefTransactionId { get { return Fields.TransactionRefTransactionId[this]; } set { Fields.TransactionRefTransactionId[this] = value; } }
        public partial class RowFields { public Int64Field TransactionRefTransactionId; }

        [DisplayName("Transaction Transaction Number"), Expression("jTransaction.[TransactionNumber]")]
        public String TransactionTransactionNumber { get { return Fields.TransactionTransactionNumber[this]; } set { Fields.TransactionTransactionNumber[this] = value; } }
        public partial class RowFields { public StringField TransactionTransactionNumber; }

        [DisplayName("Transaction Transaction Date"), Expression("jTransaction.[TransactionDate]")]
        public DateTime? TransactionTransactionDate { get { return Fields.TransactionTransactionDate[this]; } set { Fields.TransactionTransactionDate[this] = value; } }
        public partial class RowFields { public DateTimeField TransactionTransactionDate; }

        [DisplayName("Transaction Party Id"), Expression("jTransaction.[PartyId]")]
        public Int64? TransactionPartyId { get { return Fields.TransactionPartyId[this]; } set { Fields.TransactionPartyId[this] = value; } }
        public partial class RowFields { public Int64Field TransactionPartyId; }



        [DisplayName("Product Name"), Expression("jProduct.[Name]")]
        public String ProductName { get { return Fields.ProductName[this]; } set { Fields.ProductName[this] = value; } }
        public partial class RowFields { public StringField ProductName; }

        [DisplayName("Product Product Type"), Expression("jProduct.[ProductType]")]
        public Int32? ProductProductType { get { return Fields.ProductProductType[this]; } set { Fields.ProductProductType[this] = value; } }
        public partial class RowFields { public Int32Field ProductProductType; }

        [DisplayName("Product Product Category Id"), Expression("jProduct.[ProductCategoryId]")]
        public Int64? ProductProductCategoryId { get { return Fields.ProductProductCategoryId[this]; } set { Fields.ProductProductCategoryId[this] = value; } }
        public partial class RowFields { public Int64Field ProductProductCategoryId; }

        [DisplayName("Product Description"), Expression("jProduct.[Description]")]
        public String ProductDescription { get { return Fields.ProductDescription[this]; } set { Fields.ProductDescription[this] = value; } }
        public partial class RowFields { public StringField ProductDescription; }

        [DisplayName("Product Images"), Expression("jProduct.[Images]")]
        public String ProductImages { get { return Fields.ProductImages[this]; } set { Fields.ProductImages[this] = value; } }
        public partial class RowFields { public StringField ProductImages; }


        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.Id; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public TransactionDetailRow() : base(Fields) { }

        public partial class RowFields : NRowFields { }
    }
}