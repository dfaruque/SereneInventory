namespace SereneInventory.Inventory {
    export interface TransactionDetailForm {
        TransactionId: Serenity.StringEditor;
        ProductId: Serenity.StringEditor;
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
                var w1 = s.DateEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(TransactionDetailForm, [
                    'TransactionId', w0,
                    'ProductId', w0,
                    'Quantity', w1,
                    'UnitPrice', w2,
                    'Amount', w2,
                    'TenantId', w0
                ]);
            }
        }
    }
}

