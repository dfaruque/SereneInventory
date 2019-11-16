namespace SereneInventory.Inventory
{
    using _Ext;
    using SereneInventory.Inventory.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;

    [Report("Inventory.ProfitLossReport")]
    [ReportDesign(MVC.Views.Inventory.Report.ProfitLoss.ProfitLossReport)]
    public class ProfitLossReport : ListReportBase, IReport
    {
        public new ProfitLossReportRequest Request { get; set; }

        public object GetData()
        {
            using (var connection = SqlConnections.NewFor<TransactionRow>())
            {
                return new ProfitLossReportModel(connection, Request);
            }
        }
    }

    public class ProfitLossReportModel : ListReportModelBase
    {
        public new ProfitLossReportRequest Request { get; set; }

        public List<TransactionRow> OrderRows { get; set; } = new List<TransactionRow>();

        public ProfitLossReportModel(IDbConnection connection, ProfitLossReportRequest request)
        {
            Request = request;
            var fld = TransactionRow.Fields;

            OrderRows = connection.List<TransactionRow>(q => q
            .SelectTableFields()
            .SelectNonTableFields());
            //.Where(fld.CustomerID == request.CustomerId)

       }

    }

}