namespace SereneInventory.Inventory {

    @Serenity.Decorators.registerClass()
    export class ProfitLossReportPanel extends _Ext.ReportPanelBase<ProfitLossReportRequest> {
        protected getReportTitle() { return 'Profit/Loss Report'; }
        protected getReportKey() { return 'ExtraSamples.ProfitLossReport'; }
        protected getFormKey() { return ProfitLossReportRequestForm.formKey; }

        private form: ProfitLossReportRequestForm = new ProfitLossReportRequestForm(this.idPrefix);

        constructor(container: JQuery) {
            super(container);

        }
    }
}