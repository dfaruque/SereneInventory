
namespace SereneInventory.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransactionDetailGrid extends _Ext.GridBase<TransactionDetailRow, any> {
        protected getColumnsKey() { return 'Inventory.TransactionDetail'; }
        protected getDialogType() { return TransactionDetailDialog; }
        protected getIdProperty() { return TransactionDetailRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionDetailRow.localTextPrefix; }
        protected getService() { return TransactionDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}