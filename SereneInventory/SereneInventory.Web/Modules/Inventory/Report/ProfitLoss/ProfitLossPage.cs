
namespace SereneInventory.Inventory.Pages
{
    using SereneInventory.Inventory.Entities;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventory/ProfitLoss"), Route("{action=index}")]
    [PageAuthorize(typeof(TransactionRow))]
    public class ProfitLossController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Inventory.Report.ProfitLoss.ProfitLossIndex);
        }
    }
}
