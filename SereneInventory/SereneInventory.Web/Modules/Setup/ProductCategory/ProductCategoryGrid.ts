
namespace SereneInventory.Setup {

    @Serenity.Decorators.registerClass()
    export class ProductCategoryGrid extends _Ext.GridBase<ProductCategoryRow, any> {
        protected getColumnsKey() { return 'Setup.ProductCategory'; }
        protected getDialogType() { return ProductCategoryDialog; }
        protected getIdProperty() { return ProductCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return ProductCategoryRow.localTextPrefix; }
        protected getService() { return ProductCategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}