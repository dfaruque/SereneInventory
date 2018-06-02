namespace SereneInventory.Setup.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[dbo].[Party]")]
    [DisplayName("Party"), InstanceName("Party"), TwoLevelCached]
    [ReadPermission("Setup:Party:Read")]
    [InsertPermission("Setup:Party:Insert")]
    [UpdatePermission("Setup:Party:Update")]
    [DeletePermission("Setup:Party:Delete")]
    public sealed class PartyRow : NRow, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int64? Id { get { return Fields.Id[this]; } set { Fields.Id[this] = value; } }
		public partial class RowFields { public Int64Field Id; }

        [DisplayName("Party Type")]
        public Int32? PartyType { get { return Fields.PartyType[this]; } set { Fields.PartyType[this] = value; } }
		public partial class RowFields { public Int32Field PartyType; }

        [DisplayName("Name"), Size(100), NotNull, QuickSearch]
        public String Name { get { return Fields.Name[this]; } set { Fields.Name[this] = value; } }
		public partial class RowFields { public StringField Name; }

        [DisplayName("Address"), Size(500)]
        public String Address { get { return Fields.Address[this]; } set { Fields.Address[this] = value; } }
		public partial class RowFields { public StringField Address; }

        [DisplayName("Contact"), Size(500)]
        public String Contact { get { return Fields.Contact[this]; } set { Fields.Contact[this] = value; } }
		public partial class RowFields { public StringField Contact; }

        #region Foreign Fields

        #endregion Foreign Fields


        IIdField IIdRow.IdField { get { return Fields.Id; } }

        StringField INameRow.NameField { get { return Fields.Name; } }

        public static readonly RowFields Fields = new RowFields().Init();

        public PartyRow() : base(Fields) { }

		public partial class RowFields : NRowFields { }
    }
}