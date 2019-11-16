namespace SereneInventory.Inventory {
    export interface PurchaseInvoiceForm {
        TransactionType: Serenity.EnumEditor;
        TransactionNumber: Serenity.StringEditor;
        TransactionDate: Serenity.DateEditor;
        TenantId: Serenity.LookupEditor;
        TransactionDetailRows: TransactionDetailGridEditor;
        TransactionExpenseRows: TransactionExpenseGridEditor;
        ExpensePerPiece: Serenity.DecimalEditor;
        TotalRefferencedAmount: Serenity.DecimalEditor;
    }

    export class PurchaseInvoiceForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.PurchaseInvoice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PurchaseInvoiceForm.init)  {
                PurchaseInvoiceForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = TransactionDetailGridEditor;
                var w5 = TransactionExpenseGridEditor;
                var w6 = s.DecimalEditor;

                Q.initFormType(PurchaseInvoiceForm, [
                    'TransactionType', w0,
                    'TransactionNumber', w1,
                    'TransactionDate', w2,
                    'TenantId', w3,
                    'TransactionDetailRows', w4,
                    'TransactionExpenseRows', w5,
                    'ExpensePerPiece', w6,
                    'TotalRefferencedAmount', w6
                ]);
            }
        }
    }
}

