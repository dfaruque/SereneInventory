namespace SereneInventory.Inventory.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
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

        [DisplayName("Transaction Id"), NotNull]
        public Int64? TransactionId { get { return Fields.TransactionId[this]; } set { Fields.TransactionId[this] = value; } }
		public partial class RowFields { public Int64Field TransactionId; }

        [DisplayName("Product Id"), NotNull]
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

        [DisplayName("Tenant Id")]
        public Int64? TenantId { get { return Fields.TenantId[this]; } set { Fields.TenantId[this] = value; } }
		public partial class RowFields { public Int64Field TenantId; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.Id; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public TransactionDetailRow() : base(Fields) { }

		public partial class RowFields : NRowFields { }
    }
}