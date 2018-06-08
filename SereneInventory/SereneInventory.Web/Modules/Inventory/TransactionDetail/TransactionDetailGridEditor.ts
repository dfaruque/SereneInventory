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

        validateEntity(row: TransactionDetailRow, id: number) {
            row.ProductId = Q.toId(row.ProductId);

            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductId === row.ProductId);
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This product is already in transaction details!');
                return false;
            }

            return true;
        }
    }
}