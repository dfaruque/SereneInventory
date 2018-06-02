namespace SereneInventory.Inventory {
    export interface TransactionDetailForm {
        ProductId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
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
                var w1 = s.DecimalEditor;
                var w2 = s.StringEditor;

                Q.initFormType(TransactionDetailForm, [
                    'ProductId', w0,
                    'Quantity', w1,
                    'UnitPrice', w1,
                    'Amount', w1,
                    'TenantId', w2
                ]);
            }
        }
    }
}

