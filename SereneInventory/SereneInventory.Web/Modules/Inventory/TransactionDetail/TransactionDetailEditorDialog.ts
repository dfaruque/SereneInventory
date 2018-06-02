/// <reference path="../../_Ext/_q/_q.ts" />

namespace SereneInventory.Inventory {

    @Serenity.Decorators.registerClass()
    export class TransactionDetailEditorDialog extends _Ext.EditorDialogBase<TransactionDetailRow> {
        protected getFormKey() { return TransactionDetailForm.formKey; }
        protected getLocalTextPrefix() { return TransactionDetailRow.localTextPrefix; }

        protected form = new TransactionDetailForm(this.idPrefix);

        constructor() {
            super();

            this.form.Quantity.change(e => {
                this.calculateAmount();
            });

            this.form.UnitPrice.change(e => {
                this.calculateAmount();
            });

        }

        private calculateAmount() {

            this.form.Amount.value = this.form.Quantity.value * this.form.UnitPrice.value;
        }
    }
}