
namespace SereneInventory.Inventory {
    import fld = TransactionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class SalesInvoiceDialog extends _Ext.DialogBase<TransactionRow, any> {
        protected getFormKey() { return SalesInvoiceForm.formKey; }
        protected getIdProperty() { return TransactionRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getNameProperty() { return TransactionRow.nameProperty; }
        protected getService() { return TransactionService.baseUrl; }

        protected getEntityTitle() { return getTrasactionTypeName(TransactionType.SalesInvoice) }

        protected form = new TransactionForm(this.idPrefix);

        constructor() {
            super();

            q.initDetailEditor(this, this.form.TransactionDetailRows);
        }

        protected getToolbarButtons() {
            let buttons = super.getToolbarButtons();

            buttons.push({
                title: 'Print',
                icon: 'fa fa-print',
                cssClass: 'btn-custom',
                onClick: () => {
                    Common.ReportHelper.execute({ reportKey: 'Inventory.SalesInvoice', params: { ID: this.entityId }, extension: 'html' })
                }
            });

            return buttons;
        }


        protected getSaveEntity() {
            let entity = super.getSaveEntity();

            entity.TransactionType = TransactionType.SalesInvoice;

            return entity;
        }


        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.TransactionNumber.value);

            if (!val || val.length <= 1) {

                var prefix = (val || getTrasactionNumberPrefix(TransactionType.SalesInvoice)).toUpperCase();

                TransactionService.GetNextNumber({
                    Prefix: prefix,
                    Length: prefix.length + 5 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.TransactionNumber.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.TransactionNumber.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}