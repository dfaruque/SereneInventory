
namespace SereneInventory.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransactionDetailDialog extends _Ext.DialogBase<TransactionDetailRow, any> {
        protected getFormKey() { return TransactionDetailForm.formKey; }
        protected getIdProperty() { return TransactionDetailRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionDetailRow.localTextPrefix; }
        protected getService() { return TransactionDetailService.baseUrl; }

        protected form = new TransactionDetailForm(this.idPrefix);

    }
}