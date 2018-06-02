namespace SereneInventory.Inventory {
    export interface TransactionDetailForm {
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
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.StringEditor;

                Q.initFormType(TransactionDetailForm, [
                    'ProductId', w0,
                    'Quantity', w1,
                    'UnitPrice', w2,
                    'Amount', w2,
                    'TenantId', w3
                ]);
            }
        }
    }
}

