
namespace SereneInventory.Inventory
{
    using _Ext;
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System;
    using System.ComponentModel;

    [FormScript("Inventory.ProfitLossReportRequestForm")]
    public class ProfitLossReportRequestForm
    {
        [HalfWidth(UntilNext = true)]
        [DisplayName("Date From"), Required]
        public DateTime DateFrom { get; set; }
        [DisplayName("Date To"), Required]
        public DateTime DateTo { get; set; }
    }

    public class ProfitLossReportRequest : ServiceRequest
    {
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
    }
}