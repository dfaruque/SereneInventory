/// <reference path="../../../_Ext/_q/_q.ts" />

namespace SereneInventory.Inventory {
    import fld = TransactionRow.Fields; 

    @Serenity.Decorators.registerClass()
    export class TransactionEditorGrid extends _Ext.GridEditorBase<TransactionRow> {
        protected getColumnsKey() { return 'Inventory.Transaction'; }
        protected getDialogType() { return TransactionEditorDialog; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }

        protected getDisplayName() { return getTrasactionTypeName(getTrasactionTypeFromUrl()) }
        protected getItemName() { return this.getDisplayName() }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();
            let transactionType = getTrasactionTypeFromUrl();
            let trasactionNumberCaption = getTrasactionNumberCaption(transactionType);

            Q.first(columns, x => x.field == fld.TransactionNumber).name = trasactionNumberCaption;
            Q.first(columns, x => x.field == fld.RefTransactionTransactionNumber).visible = false;

            return columns;
        }

    }
}