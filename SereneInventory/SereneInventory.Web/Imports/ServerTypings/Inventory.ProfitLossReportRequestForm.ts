namespace SereneInventory.Inventory {
    export interface ProfitLossReportRequestForm {
        DateFrom: Serenity.DateEditor;
        DateTo: Serenity.DateEditor;
    }

    export class ProfitLossReportRequestForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.ProfitLossReportRequestForm';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProfitLossReportRequestForm.init)  {
                ProfitLossReportRequestForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;

                Q.initFormType(ProfitLossReportRequestForm, [
                    'DateFrom', w0,
                    'DateTo', w0
                ]);
            }
        }
    }
}

