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
    [DisplayName("Transaction Item"), InstanceName("Transaction Item"), TwoLevelCached]
    [ReadPermission("Inventory:TransactionDetail:Read")]
    [InsertPermission("Inventory:TransactionDetail:Insert")]
    [UpdatePermission("Inventory:TransactionDetail:Update")]
    [DeletePermission("Inventory:TransactionDetail:Delete")]
    [LookupScript]
    public sealed class TransactionDetailRow : NRow, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int64? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
        public partial class RowFields { public Int64Field Id; }

        [DisplayName("Transaction"), NotNull, ForeignKey("[dbo].[Transaction]", "Id"), LeftJoin("jTransaction"), TextualField("TransactionTransactionNumber")]
        [LookupInclude]
        public Int64? TransactionId { get { return Fields.TransactionId[this]; } set { Fields.TransactionId[this] = value; } }
        public partial class RowFields { public Int64Field TransactionId; }

        //[DisplayName("Ref. Transaction Detail"), ForeignKey("[dbo].[TransactionDetail]", "Id"), LeftJoin("jRefTransactionDetail")]
        //[LookupEditor(typeof(PurchaseInvoiceDetailLookup)/*, CascadeFrom = nameof(RefTransactionDetailTransactionId), CascadeField = nameof(TransactionDetailRow.TransactionId)*/)]
        //public Int64? RefTransactionDetailId { get { return Fields.RefTransactionDetailId[this]; } set { Fields.RefTransactionDetailId[this] = value; } }
        //public partial class RowFields { public Int64Field RefTransactionDetailId; }

        [DisplayName("Product"), ForeignKey("[dbo].[Product]", "Id"), LeftJoin("jProduct"), TextualField("ProductName")]
        [LookupEditor(typeof(ProductRow), InplaceAdd = true)]
        public Int64? ProductId { get { return Fields.ProductId[this]; } set { Fields.ProductId[this] = value; } }
        public partial class RowFields { public Int64Field ProductId; }

        [DisplayName("Quantity"), NotNull, Width(200, Min = 200)]
        public Decimal? Quantity { get { return Fields.Quantity[this]; } set { Fields.Quantity[this] = value; } }
        public partial class RowFields { public DecimalField Quantity; }

        [DisplayName("Unit Price"), Size(19), Scale(2), NotNull, Width(200, Min = 200)]
        public Decimal? UnitPrice { get { return Fields.UnitPrice[this]; } set { Fields.UnitPrice[this] = value; } }
        public partial class RowFields { public DecimalField UnitPrice; }

        [DisplayName("Amount"), Size(19), Scale(2), NotNull, ReadOnly(true), Width(200, Min = 200)]
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

        //[DisplayName("Ref. Transaction"), Expression("jRefTransactionDetail.[TransactionId]")]
        //[ForeignKey(typeof(TransactionRow)), LeftJoin("jRefTransaction")]
        //[LookupEditor(typeof(TransactionRow))]
        //public Int64? RefTransactionDetailTransactionId { get { return Fields.RefTransactionDetailTransactionId[this]; } set { Fields.RefTransactionDetailTransactionId[this] = value; } }
        //public partial class RowFields { public Int64Field RefTransactionDetailTransactionId; }

        [DisplayName("Ref. Transaction Transaction Type"), Expression("jRefTransaction.[TransactionType]")]
        public Int32? RefTransactionTransactionType { get { return Fields.RefTransactionTransactionType[this]; } set { Fields.RefTransactionTransactionType[this] = value; } }
        public partial class RowFields { public Int32Field RefTransactionTransactionType; }

        [DisplayName("Ref. Transaction Ref Transaction Id"), Expression("jRefTransaction.[RefTransactionId]")]
        public Int64? RefTransactionRefTransactionId { get { return Fields.RefTransactionRefTransactionId[this]; } set { Fields.RefTransactionRefTransactionId[this] = value; } }
        public partial class RowFields { public Int64Field RefTransactionRefTransactionId; }

        [DisplayName("Ref. Transaction Number"), Expression("jRefTransaction.[TransactionNumber]"), MinSelectLevel(SelectLevel.List)]
        public String RefTransactionTransactionNumber { get { return Fields.RefTransactionTransactionNumber[this]; } set { Fields.RefTransactionTransactionNumber[this] = value; } }
        public partial class RowFields { public StringField RefTransactionTransactionNumber; }

        [DisplayName("Ref. Transaction Date"), Expression("jRefTransaction.[TransactionDate]")]
        public DateTime? RefTransactionTransactionDate { get { return Fields.RefTransactionTransactionDate[this]; } set { Fields.RefTransactionTransactionDate[this] = value; } }
        public partial class RowFields { public DateTimeField RefTransactionTransactionDate; }

        [DisplayName("Ref. Transaction Party Id"), Expression("jRefTransaction.[PartyId]")]
        public Int64? RefTransactionPartyId { get { return Fields.RefTransactionPartyId[this]; } set { Fields.RefTransactionPartyId[this] = value; } }
        public partial class RowFields { public Int64Field RefTransactionPartyId; }


        [DisplayName("Product Name"), Expression("jProduct.[Name]"), MinSelectLevel(SelectLevel.List)]
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

        [Expression("(jTransaction.[TransactionNumber] + ' - ' + jProduct.[Name])")]
        public String LookupText { get { return Fields.LookupText[this]; } set { Fields.LookupText[this] = value; } }
        public partial class RowFields { public StringField LookupText; }

        #endregion Foreign Fields

//        const string totalRefferencedQuantityExp = @"ISNULL((SELECT SUM(rd.Quantity) 
//FROM TransactionDetail rd 
//WHERE T0.Id = rd.RefTransactionDetailId), 0)";
//        [DisplayName("Remaining Quantity"), Expression("T0.Quantity - " + totalRefferencedQuantityExp)]
//        [ReadOnly(true), MinSelectLevel(SelectLevel.List)]
//        public Decimal? RemainingQuantity { get { return Fields.RemainingQuantity[this]; } set { Fields.RemainingQuantity[this] = value; } }
//        public partial class RowFields { public DecimalField RemainingQuantity; }


        IIdField IIdRow.IdField { get { return Fields.Id; } }

        StringField INameRow.NameField { get { return Fields.LookupText; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public TransactionDetailRow() : base(Fields) { }

        public partial class RowFields : NRowFields { }
    }
}