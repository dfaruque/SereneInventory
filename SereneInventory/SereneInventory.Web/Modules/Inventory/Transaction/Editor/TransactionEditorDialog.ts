/// <reference path="../../../_Ext/_q/_q.ts" />

namespace SereneInventory.Inventory {
    import fld = TransactionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class TransactionEditorDialog extends _Ext.EditorDialogBase<TransactionRow> {
        protected getFormKey() { return TransactionForm.formKey; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getNameProperty() { return TransactionRow.nameProperty; }

        protected getEntityTitle() { return getTrasactionTypeName(getTrasactionTypeFromUrl()) }

        protected form = new TransactionForm(this.idPrefix);

        protected getPropertyItems() {
            let columns = super.getPropertyItems();
            let transactionType = getTrasactionTypeFromUrl();
            let trasactionNumberCaption = getTrasactionNumberCaption(transactionType);

            Q.first(columns, x => x.name == fld.TransactionNumber).title = trasactionNumberCaption;

            return columns;
        }
    }
}