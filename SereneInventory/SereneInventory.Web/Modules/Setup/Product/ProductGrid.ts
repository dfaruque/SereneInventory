
namespace SereneInventory.Setup {

    @Serenity.Decorators.registerClass()
    export class ProductGrid extends _Ext.GridBase<ProductRow, any> {
        protected getColumnsKey() { return 'Setup.Product'; }
        protected getDialogType() { return ProductDialog; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getService() { return ProductService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}