
namespace SereneInventory.Setup {

    @Serenity.Decorators.registerClass()
    export class ProductCategoryDialog extends _Ext.DialogBase<ProductCategoryRow, any> {
        protected getFormKey() { return ProductCategoryForm.formKey; }
        protected getIdProperty() { return ProductCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return ProductCategoryRow.localTextPrefix; }
        protected getNameProperty() { return ProductCategoryRow.nameProperty; }
        protected getService() { return ProductCategoryService.baseUrl; }

        protected form = new ProductCategoryForm(this.idPrefix);

    }
}