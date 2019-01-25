namespace SereneInventory.Inventory {
    export interface SalesInvoiceForm {
        TransactionType: Serenity.EnumEditor;
        TransactionNumber: Serenity.StringEditor;
        TransactionDate: Serenity.DateEditor;
        PartyId: Serenity.LookupEditor;
        TenantId: Serenity.StringEditor;
        TransactionDetailRows: TransactionDetailGridEditor;
    }

    export class SalesInvoiceForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.SalesInvoice';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SalesInvoiceForm.init)  {
                SalesInvoiceForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.LookupEditor;
                var w4 = TransactionDetailGridEditor;

                Q.initFormType(SalesInvoiceForm, [
                    'TransactionType', w0,
                    'TransactionNumber', w1,
                    'TransactionDate', w2,
                    'PartyId', w3,
                    'TenantId', w1,
                    'TransactionDetailRows', w4
                ]);
            }
        }
    }
}

