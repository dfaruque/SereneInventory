using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SereneInventory.Inventory
{
    public partial class TransactionExpenseGridEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SereneInventory.Inventory.TransactionExpenseGridEditor";

        public TransactionExpenseGridEditorAttribute()
            : base(Key)
        {
        }
    }
}

