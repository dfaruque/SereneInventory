namespace SereneInventory.Setup {
    export interface PartyForm {
        PartyType: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Contact: Serenity.StringEditor;
        TenantId: Serenity.StringEditor;
    }

    export class PartyForm extends Serenity.PrefixedContext {
        static formKey = 'Setup.Party';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PartyForm.init)  {
                PartyForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(PartyForm, [
                    'PartyType', w0,
                    'Name', w1,
                    'Address', w1,
                    'Contact', w1,
                    'TenantId', w1
                ]);
            }
        }
    }
}

