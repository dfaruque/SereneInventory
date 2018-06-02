
namespace SereneInventory.Setup {

    @Serenity.Decorators.registerClass()
    export class PartyGrid extends _Ext.GridBase<PartyRow, any> {
        protected getColumnsKey() { return 'Setup.Party'; }
        protected getDialogType() { return PartyDialog; }
        protected getIdProperty() { return PartyRow.idProperty; }
        protected getLocalTextPrefix() { return PartyRow.localTextPrefix; }
        protected getService() { return PartyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}