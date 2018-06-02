namespace SereneInventory.Inventory {
    export interface TransactionDetailForm {
        TransactionId: Serenity.StringEditor;
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DateEditor;
        UnitPrice: Serenity.DecimalEditor;
        Amount: Serenity.DecimalEditor;
        TenantId: Serenity.StringEditor;
    }

    export class TransactionDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.TransactionDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransactionDetailForm.init)  {
                TransactionDetailForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(TransactionDetailForm, [
                    'TransactionId', w0,
                    'ProductId', w1,
                    'Quantity', w2,
                    'UnitPrice', w3,
                    'Amount', w3,
                    'TenantId', w0
                ]);
            }
        }
    }
}

