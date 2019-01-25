namespace SereneInventory.Inventory {
    import fld = TransactionRow.Fields;

    @Serenity.Decorators.registerClass()
    export class PurchaseInvoiceGrid extends _Ext.GridBase<TransactionRow, any> {
        protected getColumnsKey() { return 'Inventory.PurchaseInvoice'; }
        protected getDialogType() { return PurchaseInvoiceDialog; }
        protected getIdProperty() { return TransactionRow.idProperty; }
        protected getLocalTextPrefix() { return TransactionRow.localTextPrefix; }
        protected getService() { return TransactionService.baseUrl; }

        protected getDisplayName() { return getTrasactionTypeName(TransactionType.PurchaseInvoice) }
        protected getItemName() { return this.getDisplayName() }

        constructor(container: JQuery) {
            super(container);
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
                    (this.view.params as TransactionListRequest).ProductId = Q.toId(w.value);
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
                [[fld.TransactionType], '=', TransactionType.PurchaseInvoice]);

            return true;
        }

    }
}