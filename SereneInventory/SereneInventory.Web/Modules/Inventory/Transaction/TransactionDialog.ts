/// <reference path="../../_Ext/_q/_q.ts" />

namespace SereneInventory.Inventory {
    import fld = TransactionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class TransactionDialog extends _Ext.DialogBase<TransactionRow, any> {
        protected getFormKey() { return TransactionForm.formKey; }
        protected getIdProperty() { return TransactionRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getNameProperty() { return TransactionRow.nameProperty; }
        protected getService() { return TransactionService.baseUrl; }

        protected getEntityTitle() { return getTrasactionTypeName(getTrasactionTypeFromUrl()) }

        protected form = new TransactionForm(this.idPrefix);

        constructor() {
            super();

            q.initDetailEditor(this, this.form.TransactionDetailRows);
            //q.initDetailEditor(this, this.form.RelatedTransactionRows, { hideToolbar: true });
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

            entity.TransactionType = getTrasactionTypeFromUrl();

            return entity;
        }

        protected getPropertyItems() {
            let columns = super.getPropertyItems();
            let transactionType = getTrasactionTypeFromUrl();
            let trasactionNumberCaption = getTrasactionNumberCaption(transactionType);

            Q.first(columns, x => x.name == fld.TransactionNumber).title = trasactionNumberCaption;

            return columns;
        }
    }
}