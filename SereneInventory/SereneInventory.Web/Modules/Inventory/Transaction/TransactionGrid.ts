/// <reference path="../../_Ext/_q/_q.ts" />

namespace SereneInventory.Inventory {
    import fld = TransactionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class TransactionGrid extends _Ext.GridBase<TransactionRow, any> {
        protected getColumnsKey() { return 'Inventory.Transaction'; }
        protected getDialogType() { return TransactionDialog; }
        protected getIdProperty() { return TransactionRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getService() { return TransactionService.baseUrl; }

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
            //Q.first(columns, x => x.field == fld.RefTransactionTransactionNumber).name = 'Ref. ' + trasactionNumberCaption;

            return columns;
        }

        protected getQuickFilters() {
            var filters = super.getQuickFilters();

            filters.push({
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: Setup.ProductRow.lookupKey
                },
                field: 'ProductId',
                title: 'Contains Product in Details',
                handler: w => {
                    (this.view.params as OrderListRequest).ProductId = Q.toId(w.value);
                },
                cssClass: 'hidden-xs'
            });

            return filters;
        }
        protected onViewSubmit() {
            if (!super.onViewSubmit()) {
                return false;
            }

            var request = this.view.params as Serenity.ListRequest;

            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [[fld.TransactionType], '=', getTrasactionTypeFromUrl()]);

            return true;
        }

    }
}