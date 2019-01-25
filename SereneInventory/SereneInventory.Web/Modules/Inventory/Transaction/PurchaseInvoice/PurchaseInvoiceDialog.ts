
namespace SereneInventory.Inventory {
    import fld = TransactionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class PurchaseInvoiceDialog extends _Ext.DialogBase<TransactionRow, any> {
        protected getFormKey() { return PurchaseInvoiceForm.formKey; }
        protected getIdProperty() { return TransactionRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getNameProperty() { return TransactionRow.nameProperty; }
        protected getService() { return TransactionService.baseUrl; }

        protected getEntityTitle() { return getTrasactionTypeName(TransactionType.PurchaseInvoice) }

        protected form = new PurchaseInvoiceForm(this.idPrefix);

        constructor() {
            super();

            q.initDetailEditor(this, this.form.TransactionDetailRows);
            q.initDetailEditor(this, this.form.TransactionExpenseRows);

            this.form.TransactionDetailRows.onItemsChanged = () => {
                this.calculateAmount();
            }
            this.form.TransactionExpenseRows.onItemsChanged = () => {
                this.calculateAmount();
            }
        }


        protected getSaveEntity() {
            let entity = super.getSaveEntity();

            entity.TransactionType = TransactionType.PurchaseInvoice;

            return entity;
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();

            this.calculateAmount();
        }

        private calculateAmount() {
            let totalQuantity = 0;
            this.form.TransactionDetailRows.value.forEach(r => totalQuantity += r.Quantity);
            let totalExpense = 0;
            this.form.TransactionExpenseRows.value.forEach(r => totalExpense += r.Amount);
            this.form.ExpensePerPiece.value = totalExpense / totalQuantity;

        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.TransactionNumber.value);

            if (!val || val.length <= 1) {

                var prefix = (val || getTrasactionNumberPrefix(TransactionType.PurchaseInvoice)).toUpperCase();

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