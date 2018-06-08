using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SereneInventory.Inventory
{
    public partial class TransactionEditorGridAttribute : CustomEditorAttribute
    {
        public const string Key = "SereneInventory.Inventory.TransactionEditorGrid";

        public TransactionEditorGridAttribute()
            : base(Key)
        {
        }
    }
}

