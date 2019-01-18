namespace SereneInventory.Setup {
    export interface ProductForm {
        Name: Serenity.StringEditor;
        Code: Serenity.StringEditor;
        ProductCategoryId: Serenity.LookupEditor;
        Description: Serenity.StringEditor;
        Images: Serenity.MultipleImageUploadEditor;
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
                var w1 = s.LookupEditor;
                var w2 = s.MultipleImageUploadEditor;

                Q.initFormType(ProductForm, [
                    'Name', w0,
                    'Code', w0,
                    'ProductCategoryId', w1,
                    'Description', w0,
                    'Images', w2,
                    'TenantId', w0
                ]);
            }
        }
    }
}

