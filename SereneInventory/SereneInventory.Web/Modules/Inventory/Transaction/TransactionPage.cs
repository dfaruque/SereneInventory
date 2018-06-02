
namespace SereneInventory.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventory/Transaction"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TransactionRow))]
    public class TransactionController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Transaction/TransactionIndex.cshtml");
        }

        public ActionResult PurchaseInvoiceIndex()
        {
            return View("~/Modules/Inventory/Transaction/TransactionIndex.cshtml");
        }

        public ActionResult SalesInvoiceIndex()
        {
            return View("~/Modules/Inventory/Transaction/TransactionIndex.cshtml");
        }

    }
}