using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SereneInventory.Inventory
{
    public partial class TransactionDetailGridEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SereneInventory.Inventory.TransactionDetailGridEditor";

        public TransactionDetailGridEditorAttribute()
            : base(Key)
        {
        }
    }
}

