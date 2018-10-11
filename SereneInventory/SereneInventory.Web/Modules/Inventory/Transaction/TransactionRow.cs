namespace SereneInventory.Inventory.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Setup.Entities;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Transaction]")] 
    [DisplayName("Transaction"), InstanceName("Transaction"), TwoLevelCached]
    [ReadPermission("Inventory:Transaction:Read")]
    [InsertPermission("Inventory:Transaction:Insert")]
    [UpdatePermission("Inventory:Transaction:Update")]
    [DeletePermission("Inventory:Transaction:Delete")]
    [LookupScript]
    public sealed class TransactionRow : NRow, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity, SortOrder(1, true)]
        public Int64? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
        public partial class RowFields { public Int64Field Id; }

        [DisplayName("Transaction Type"), NotNull]
        public TransactionType? TransactionType { get { return (TransactionType?)Fields.TransactionType[this]; } set { Fields.TransactionType[this] = (Int32?)value; } }
        public partial class RowFields { public Int32Field TransactionType; }

        //The following field is moved to detail now
        //[DisplayName("Ref. Transaction"), ForeignKey("[dbo].[Transaction]", "Id"), LeftJoin("jRefTransaction"), TextualField("RefTransactionTransactionNumber")]
        //[LookupEditor(typeof(TransactionRow))]
        //public Int64? RefTransactionId { get { return Fields.RefTransactionId[this]; } set { Fields.RefTransactionId[this] = value; } }
        //public partial class RowFields { public Int64Field RefTransactionId; }

        [DisplayName("Transaction Number"), Size(50), NotNull, QuickSearch]
        public String TransactionNumber { get { return Fields.TransactionNumber[this]; } set { Fields.TransactionNumber[this] = value; } }
        public partial class RowFields { public StringField TransactionNumber; }

        [DisplayName("Transaction Date"), NotNull, DefaultValue("today"), QuickFilter]
        public DateTime? TransactionDate { get { return Fields.TransactionDate[this]; } set { Fields.TransactionDate[this] = value; } }
        public partial class RowFields { public DateTimeField TransactionDate; }

        [DisplayName("Party"), ForeignKey("[dbo].[Party]", "Id"), LeftJoin("jParty"), TextualField("PartyName")]
        [LookupEditor(typeof(PartyRow), InplaceAdd = true), QuickFilter]
        public Int64? PartyId { get { return Fields.PartyId[this]; } set { Fields.PartyId[this] = value; } }
        public partial class RowFields { public Int64Field PartyId; }

        #region Foreign Fields


        //[DisplayName("Ref. Transaction Transaction Type"), Expression("jRefTransaction.[TransactionType]")]
        //public Int32? RefTransactionTransactionType { get { return Fields.RefTransactionTransactionType[this]; } set { Fields.RefTransactionTransactionType[this] = value; } }
        //public partial class RowFields { public Int32Field RefTransactionTransactionType; }

        //[DisplayName("Ref. Transaction Ref. Transaction Id"), Expression("jRefTransaction.[RefTransactionId]")]
        //public Int64? RefTransactionRefTransactionId { get { return Fields.RefTransactionRefTransactionId[this]; } set { Fields.RefTransactionRefTransactionId[this] = value; } }
        //public partial class RowFields { public Int64Field RefTransactionRefTransactionId; }

        //[DisplayName("Ref. Transaction Transaction Number"), Expression("jRefTransaction.[TransactionNumber]")]
        //public String RefTransactionTransactionNumber { get { return Fields.RefTransactionTransactionNumber[this]; } set { Fields.RefTransactionTransactionNumber[this] = value; } }
        //public partial class RowFields { public StringField RefTransactionTransactionNumber; }

        //[DisplayName("Ref. Transaction Transaction Date"), Expression("jRefTransaction.[TransactionDate]")]
        //public DateTime? RefTransactionTransactionDate { get { return Fields.RefTransactionTransactionDate[this]; } set { Fields.RefTransactionTransactionDate[this] = value; } }
        //public partial class RowFields { public DateTimeField RefTransactionTransactionDate; }

        //[DisplayName("Ref. Transaction Party Id"), Expression("jRefTransaction.[PartyId]")]
        //public Int64? RefTransactionPartyId { get { return Fields.RefTransactionPartyId[this]; } set { Fields.RefTransactionPartyId[this] = value; } }
        //public partial class RowFields { public Int64Field RefTransactionPartyId; }



        [DisplayName("Party Party Type"), Expression("jParty.[PartyType]")]
        public Int32? PartyPartyType { get { return Fields.PartyPartyType[this]; } set { Fields.PartyPartyType[this] = value; } }
        public partial class RowFields { public Int32Field PartyPartyType; }

        [DisplayName("Party Name"), Expression("jParty.[Name]")]
        public String PartyName { get { return Fields.PartyName[this]; } set { Fields.PartyName[this] = value; } }
        public partial class RowFields { public StringField PartyName; }

        [DisplayName("Party Address"), Expression("jParty.[Address]")]
        public String PartyAddress { get { return Fields.PartyAddress[this]; } set { Fields.PartyAddress[this] = value; } }
        public partial class RowFields { public StringField PartyAddress; }

        [DisplayName("Party Contact"), Expression("jParty.[Contact]")]
        public String PartyContact { get { return Fields.PartyContact[this]; } set { Fields.PartyContact[this] = value; } }
        public partial class RowFields { public StringField PartyContact; }


        #endregion Foreign Fields

        [DisplayName("Transaction Details"), MasterDetailRelation(nameof(TransactionDetailRow.TransactionId))]
        [TransactionDetailGridEditor]
        public List<TransactionDetailRow> TransactionDetailRows { get { return Fields.TransactionDetailRows[this]; } set { Fields.TransactionDetailRows[this] = value; } }
        public partial class RowFields { public ListField<TransactionDetailRow> TransactionDetailRows; }

        //[DisplayName("Transaction Details"), MasterDetailRelation(nameof(TransactionRow.RefTransactionId))]
        //[TransactionEditorGrid]
        //public List<TransactionRow> RelatedTransactionRows { get { return Fields.RelatedTransactionRows[this]; } set { Fields.RelatedTransactionRows[this] = value; } }
        //public partial class RowFields { public ListField<TransactionRow> RelatedTransactionRows; }

        const string totalQuantityExp = "(SELECT SUM(d.Quantity) FROM TransactionDetail d WHERE d.TransactionId = T0.Id)";

        [DisplayName("Total Quantity"), Expression(totalQuantityExp)]
        [MinSelectLevel(SelectLevel.List)]
        public Decimal? TotalQuantity { get { return Fields.TotalQuantity[this]; } set { Fields.TotalQuantity[this] = value; } }
        public partial class RowFields { public DecimalField TotalQuantity; }

        [DisplayName("Total Amount"), Expression("(SELECT SUM(d.Amount) FROM TransactionDetail d WHERE d.TransactionId = T0.Id)")]
        [MinSelectLevel(SelectLevel.List)]
        public Decimal? TotalAmount { get { return Fields.TotalAmount[this]; } set { Fields.TotalAmount[this] = value; } }
        public partial class RowFields { public DecimalField TotalAmount; }

        const string totalRefferencedQuantityExp = @"ISNULL((SELECT SUM(d.Quantity) 
FROM TransactionDetail d 
Join TransactionDetail rd ON rd.Id = d.RefTransactionDetailId
WHERE rd.TransactionId = T0.Id), 0)";
        [DisplayName("Remaining Quantity"), Expression(totalQuantityExp + " - " + totalRefferencedQuantityExp)]
        [ReadOnly(true)]
        public Decimal? RemainingQuantity { get { return Fields.RemainingQuantity[this]; } set { Fields.RemainingQuantity[this] = value; } }
        public partial class RowFields { public DecimalField RemainingQuantity; }

        IIdField IIdRow.IdField { get { return Fields.Id; } }

        StringField INameRow.NameField { get { return Fields.TransactionNumber; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public TransactionRow() : base(Fields) { }

        public partial class RowFields : NRowFields { }
    }
}