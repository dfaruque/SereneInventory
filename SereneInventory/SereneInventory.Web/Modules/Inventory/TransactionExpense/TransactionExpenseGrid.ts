
namespace SereneInventory.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransactionExpenseGridEditor extends _Ext.GridEditorBase<TransactionExpenseRow> {
        protected getColumnsKey() { return 'Inventory.TransactionExpense'; }
        protected getDialogType() { return TransactionExpenseDialog; }
        protected getLocalTextPrefix() { return TransactionExpenseRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}