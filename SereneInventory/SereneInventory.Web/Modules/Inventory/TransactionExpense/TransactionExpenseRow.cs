
namespace SereneInventory.Inventory.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Inventory"), TableName("[dbo].[TransactionExpense]")]
    [DisplayName("Transaction Expense"), InstanceName("Transaction Expense")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class TransactionExpenseRow : NRow, IIdRow
    {

        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Transaction"), NotNull, ForeignKey("[dbo].[Transaction]", "Id"), LeftJoin("jTransaction"), TextualField("TransactionTransactionNumber")]
        public Int64? TransactionId
        {
            get { return Fields.TransactionId[this]; }
            set { Fields.TransactionId[this] = value; }
        }

        [DisplayName("Expense Type")]
        public ExpenseType? ExpenseType
        {
            get { return (ExpenseType?)Fields.ExpenseType[this]; }
            set { Fields.ExpenseType[this] = (int?)value; }
        }

        [DisplayName("Amount"), Size(19), Scale(2), NotNull]
        public Decimal? Amount
        {
            get { return Fields.Amount[this]; }
            set { Fields.Amount[this] = value; }
        }



        [DisplayName("Transaction Transaction Type"), Expression("jTransaction.[TransactionType]")]
        public Int32? TransactionTransactionType
        {
            get { return Fields.TransactionTransactionType[this]; }
            set { Fields.TransactionTransactionType[this] = value; }
        }

        [DisplayName("Transaction Ref Transaction Id"), Expression("jTransaction.[RefTransactionId]")]
        public Int64? TransactionRefTransactionId
        {
            get { return Fields.TransactionRefTransactionId[this]; }
            set { Fields.TransactionRefTransactionId[this] = value; }
        }

        [DisplayName("Transaction Transaction Number"), Expression("jTransaction.[TransactionNumber]")]
        public String TransactionTransactionNumber
        {
            get { return Fields.TransactionTransactionNumber[this]; }
            set { Fields.TransactionTransactionNumber[this] = value; }
        }

        [DisplayName("Transaction Transaction Date"), Expression("jTransaction.[TransactionDate]")]
        public DateTime? TransactionTransactionDate
        {
            get { return Fields.TransactionTransactionDate[this]; }
            set { Fields.TransactionTransactionDate[this] = value; }
        }

        [DisplayName("Transaction Party Id"), Expression("jTransaction.[PartyId]")]
        public Int64? TransactionPartyId
        {
            get { return Fields.TransactionPartyId[this]; }
            set { Fields.TransactionPartyId[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TransactionExpenseRow()
            : base(Fields)
        {
        }

        public class RowFields : NRowFields
        {

            public Int64Field Id;

            public Int64Field TransactionId;

            public Int32Field ExpenseType;

            public DecimalField Amount;



            public Int32Field TransactionTransactionType;

            public Int64Field TransactionRefTransactionId;

            public StringField TransactionTransactionNumber;

            public DateTimeField TransactionTransactionDate;

            public Int64Field TransactionPartyId;


		}
    }
}
