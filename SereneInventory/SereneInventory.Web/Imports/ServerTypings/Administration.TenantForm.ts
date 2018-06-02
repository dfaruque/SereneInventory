namespace SereneInventory.Administration {
    export interface TenantForm {
        Name: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        TenantId: Serenity.StringEditor;
    }

    export class TenantForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Tenant';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TenantForm.init)  {
                TenantForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TenantForm, [
                    'Name', w0,
                    'Description', w0,
                    'TenantId', w0
                ]);
            }
        }
    }
}

