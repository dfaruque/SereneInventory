
namespace SereneInventory.Inventory.Reports
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serenity.Reporting;
    using _Ext;
    using SereneInventory.Inventory.Entities;
    using SereneInventory.Inventory.Repositories;
    using Serenity.Services;

    [Report("Inventory.SalesInvoice")]
    [ReportDesign(MVC.Views.Inventory.Transaction.SalesInvoice.SalesInvoicePrint)]
    public class ApplicationReport : ReportBase, IReport
    {
        public Object ID { get; set; }

        public object GetData()
        {
            using (var connection = SqlConnections.NewFor<TransactionRow>())
            {
                return new TransactionRepository().Retrieve(connection, new RetrieveRequest { EntityId = ID }).Entity;
            }
        }
    }
}