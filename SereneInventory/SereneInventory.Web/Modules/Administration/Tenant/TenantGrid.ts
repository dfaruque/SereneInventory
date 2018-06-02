
namespace SereneInventory.Administration {

    @Serenity.Decorators.registerClass()
    export class TenantGrid extends _Ext.GridBase<TenantRow, any> {
        protected getColumnsKey() { return 'Administration.Tenant'; }
        protected getDialogType() { return TenantDialog; }
        protected getIdProperty() { return TenantRow.idProperty; }
        protected getLocalTextPrefix() { return TenantRow.localTextPrefix; }
        protected getService() { return TenantService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}