
namespace SereneInventory.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransactionExpenseDialog extends _Ext.EditorDialogBase<TransactionExpenseRow> {
        protected getFormKey() { return TransactionExpenseForm.formKey; }
        protected getIdProperty() { return TransactionExpenseRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionExpenseRow.localTextPrefix; }

        protected form = new TransactionExpenseForm(this.idPrefix);

    }
}