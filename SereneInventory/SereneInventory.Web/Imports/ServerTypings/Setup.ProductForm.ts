namespace SereneInventory.Setup {
    export interface ProductForm {
        Name: Serenity.StringEditor;
        ProductType: Serenity.IntegerEditor;
        ProductCategoryId: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        Images: Serenity.StringEditor;
        TenantId: Serenity.StringEditor;
    }

    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.Product';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductForm.init)  {
                ProductForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ProductForm, [
                    'Name', w0,
                    'ProductType', w1,
                    'ProductCategoryId', w0,
                    'Description', w0,
                    'Images', w0,
                    'TenantId', w0
                ]);
            }
        }
    }
}

