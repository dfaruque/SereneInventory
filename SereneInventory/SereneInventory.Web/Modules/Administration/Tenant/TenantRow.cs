namespace SereneInventory.Administration.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Tenant]")]
    [DisplayName("Tenant"), InstanceName("Tenant"), TwoLevelCached]
    [ReadPermission("Administration:Tenant:Read")]
    [InsertPermission("Administration:Tenant:Insert")]
    [UpdatePermission("Administration:Tenant:Update")]
    [DeletePermission("Administration:Tenant:Delete")]
    public sealed class TenantRow : NRow, IIdRow, INameRow
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

        [DisplayName("Tenant Id")]
        public Int64? TenantId { get { return Fields.TenantId[this]; } set { Fields.TenantId[this] = value; } }
		public partial class RowFields { public Int64Field TenantId; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.Id; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public TenantRow() : base(Fields) { }

		public partial class RowFields : NRowFields { }
    }
}