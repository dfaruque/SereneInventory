
namespace SereneInventory.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransactionGrid extends _Ext.GridBase<TransactionRow, any> {
        protected getColumnsKey() { return 'Inventory.Transaction'; }
        protected getDialogType() { return TransactionDialog; }
        protected getIdProperty() { return TransactionRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getService() { return TransactionService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}