namespace SereneInventory.Setup {
    export interface ProductCategoryForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        TenantId: Serenity.StringEditor;
    }

    export class ProductCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.ProductCategory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductCategoryForm.init)  {
                ProductCategoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProductCategoryForm, [
                    'Name', w0,
                    'Description', w0,
                    'TenantId', w0
                ]);
            }
        }
    }
}

