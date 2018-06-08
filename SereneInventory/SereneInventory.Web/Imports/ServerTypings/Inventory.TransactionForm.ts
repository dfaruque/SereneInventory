namespace SereneInventory.Inventory {
    export interface TransactionForm {
        TransactionType: Serenity.EnumEditor;
        RefTransactionId: Serenity.LookupEditor;
        TransactionNumber: Serenity.StringEditor;
        TransactionDate: Serenity.DateEditor;
        PartyId: Serenity.LookupEditor;
        TenantId: Serenity.StringEditor;
        TransactionDetailRows: TransactionDetailGridEditor;
        RelatedTransactionRows: TransactionEditorGrid;
    }

    export class TransactionForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Transaction';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransactionForm.init)  {
                TransactionForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;
                var w4 = TransactionDetailGridEditor;
                var w5 = TransactionEditorGrid;

                Q.initFormType(TransactionForm, [
                    'TransactionType', w0,
                    'RefTransactionId', w1,
                    'TransactionNumber', w2,
                    'TransactionDate', w3,
                    'PartyId', w1,
                    'TenantId', w2,
                    'TransactionDetailRows', w4,
                    'RelatedTransactionRows', w5
                ]);
            }
        }
    }
}

