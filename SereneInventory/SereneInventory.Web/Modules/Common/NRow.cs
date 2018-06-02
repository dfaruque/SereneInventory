using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace SereneInventory
{
    public abstract class NRow : Row, IInsertLogRow//, _Ext.IAuditLog
    {

        [DisplayName("Serial"), NotMapped]
        public int? RowNum { get { return Fields.RowNum[this]; } set { Fields.RowNum[this] = value; } }

        [DisplayName("Remarks"), Size(500), TextAreaEditor(Rows = 3), Width(200)]
        public String Remarks { get { return Fields.Remarks[this]; } set { Fields.Remarks[this] = value; } }

        [DisplayName("Insert Date")]
        public DateTime? IDate { get { return Fields.IDate[this]; } set { Fields.IDate[this] = value; } }

        [DisplayName("Insert User Id")]
        public Int64? IUserId { get { return Fields.IUserId[this]; } set { Fields.IUserId[this] = value; } }

        [DisplayName("Update Date")]
        public DateTime? EDate { get { return Fields.EDate[this]; } set { Fields.EDate[this] = value; } }

        [DisplayName("Update User Id")]
        public Int64? EUserId { get { return Fields.EUserId[this]; } set { Fields.EUserId[this] = value; } }

        IIdField IInsertLogRow.InsertUserIdField
        {
            get { return Fields.IUserId; }
        }

        //IIdField IUpdateLogRow.UpdateUserIdField
        //{
        //    get { return Fields.EUser; }
        //}

        DateTimeField IInsertLogRow.InsertDateField
        {
            get { return Fields.IDate; }
        }

        //DateTimeField IUpdateLogRow.UpdateDateField
        //{
        //    get { return Fields.EDate; }
        //}

        public NRow(NRowFields fields) : base(fields)
        {
            Fields = fields;
        }

        private NRowFields Fields;

        public abstract class NRowFields : RowFieldsBase
        {
            public StringField Remarks;
            public Int64Field IUserId;
            public Int64Field EUserId;
            public Int32Field RowNum;
            public DateTimeField IDate;
            public DateTimeField EDate;

        }

    }
}
