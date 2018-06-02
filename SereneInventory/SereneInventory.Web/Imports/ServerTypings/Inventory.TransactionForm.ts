namespace SereneInventory.Inventory {
    export interface TransactionForm {
        TransactionType: Serenity.IntegerEditor;
        RefTransactionId: Serenity.StringEditor;
        TransactionNumber: Serenity.StringEditor;
        TransactionDate: Serenity.DateEditor;
        PartyId: Serenity.StringEditor;
        TenantId: Serenity.StringEditor;
    }

    export class TransactionForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Transaction';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransactionForm.init)  {
                TransactionForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(TransactionForm, [
                    'TransactionType', w0,
                    'RefTransactionId', w1,
                    'TransactionNumber', w1,
                    'TransactionDate', w2,
                    'PartyId', w1,
                    'TenantId', w1
                ]);
            }
        }
    }
}

