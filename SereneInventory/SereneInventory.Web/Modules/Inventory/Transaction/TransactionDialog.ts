/// <reference path="../../_Ext/_q/_q.ts" />

namespace SereneInventory.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransactionDialog extends _Ext.DialogBase<TransactionRow, any> {
        protected getFormKey() { return TransactionForm.formKey; }
        protected getIdProperty() { return TransactionRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getNameProperty() { return TransactionRow.nameProperty; }
        protected getService() { return TransactionService.baseUrl; }

        protected form = new TransactionForm(this.idPrefix);

    }
}