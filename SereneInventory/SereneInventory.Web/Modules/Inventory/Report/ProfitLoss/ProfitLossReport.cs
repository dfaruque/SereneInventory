namespace SereneInventory.Inventory
{
    using _Ext;
    using SereneInventory.Inventory.Entities;
    using SereneInventory.Setup.Entities;
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

        public List<ItemModel> Items { get; set; } = new List<ItemModel>();

        public ProfitLossReportModel(IDbConnection connection, ProfitLossReportRequest request)
        {
            Request = request;
            var tdfld = TransactionDetailRow.Fields;
            var pfld = ProductRow.Fields;

            var purcahseQuery = new SqlQuery().From(tdfld)
                .Select(tdfld.ProductName, nameof(ItemModel.ItemName))
                .Select(Sql.Sum(tdfld.Quantity.Expression), nameof(ItemModel.PurchaseQuantity))
                .Select(Sql.Avg(tdfld.UnitPrice.Expression), nameof(ItemModel.AveragePurchasePrice))
                .Select(Sql.Avg(tdfld.Amount.Expression), nameof(ItemModel.PurchaseAmount))
                .Where(tdfld.TransactionTransactionType == (int)TransactionType.PurchaseInvoice)
                .Where(tdfld.TransactionTransactionDate >= request.DateFrom)
                .Where(tdfld.TransactionTransactionType <= request.DateTo)
                .GroupBy(tdfld.ProductName)
                ;

            var purchaseItems = connection.Query<ItemModel>(purcahseQuery);

            var salesQuery = new SqlQuery().From(tdfld)
                .Select(tdfld.ProductName, nameof(ItemModel.ItemName))
                .Select(Sql.Sum(tdfld.Quantity.Expression), nameof(ItemModel.SalesQuantity))
                .Select(Sql.Avg(tdfld.UnitPrice.Expression), nameof(ItemModel.AverageSalesPrice))
                .Select(Sql.Avg(tdfld.Amount.Expression), nameof(ItemModel.SalesAmount))
                .Where(tdfld.TransactionTransactionType == (int)TransactionType.SalesInvoice)
                .Where(tdfld.TransactionTransactionDate >= request.DateFrom)
                .Where(tdfld.TransactionTransactionType <= request.DateTo)
                .GroupBy(tdfld.ProductName)
                ;

            var salesItems = connection.Query<ItemModel>(salesQuery);


            var productQuery = new SqlQuery().From(pfld)
                .Select(pfld.Name, nameof(ItemModel.ItemName));

            Items = connection.Query<ItemModel>(productQuery).ToList();

            foreach (var item in Items)
            {
                var purchaseItem = purchaseItems.Where(f => f.ItemName == item.ItemName);

                if (purchaseItem?.Count() > 0)
                {
                    item.PurchaseQuantity = purchaseItem.Sum(s => s.PurchaseQuantity);
                    item.AveragePurchasePrice = purchaseItem.Average(s => s.AveragePurchasePrice);
                    item.PurchaseAmount = purchaseItem.Average(s => s.PurchaseAmount);
                }

                var salesItem = salesItems.Where(f => f.ItemName == item.ItemName);

                if (salesItem?.Count() > 0)
                {
                    item.SalesQuantity = salesItem.Sum(s => s.SalesQuantity);
                    item.AverageSalesPrice = salesItem.Average(s => s.AverageSalesPrice);
                    item.SalesAmount = salesItem.Average(s => s.SalesAmount);
                }
            }

            Items = Items.FindAll(f=>f.PurchaseQuantity > 0);
        }

    }

    public class ItemModel
    {
        public string ItemName { get; set; }
        public int PurchaseQuantity { get; set; }
        public int SalesQuantity { get; set; }
        public int RemainigQuantity => PurchaseQuantity - SalesQuantity;
        public double PurchaseAmount { get; set; }
        public double SalesAmount { get; set; }
        public double BalanceAmount => PurchaseAmount - SalesAmount;

        public double AveragePurchasePrice { get; set; }
        public double AverageSalesPrice { get; set; }
        public double AverageProfit => AverageSalesPrice == 0 ? 0 : AverageSalesPrice - AveragePurchasePrice;
        public double TotalProfit => AverageProfit * SalesQuantity;
    }

}