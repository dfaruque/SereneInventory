/// <reference path="../../_Ext/_q/_q.ts" />

namespace SereneInventory.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransactionDetailGridEditor extends _Ext.GridEditorBase<TransactionDetailRow> {
        protected getColumnsKey() { return 'Inventory.TransactionDetail'; }
        protected getDialogType() { return TransactionDetailEditorDialog; }
        protected getLocalTextPrefix() { return TransactionDetailRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}