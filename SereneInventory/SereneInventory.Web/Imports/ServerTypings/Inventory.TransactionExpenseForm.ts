namespace SereneInventory.Inventory {
    export interface TransactionExpenseForm {
        ExpenseType: Serenity.EnumEditor;
        Amount: Serenity.DecimalEditor;
    }

    export class TransactionExpenseForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.TransactionExpense';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TransactionExpenseForm.init)  {
                TransactionExpenseForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(TransactionExpenseForm, [
                    'ExpenseType', w0,
                    'Amount', w1
                ]);
            }
        }
    }
}

