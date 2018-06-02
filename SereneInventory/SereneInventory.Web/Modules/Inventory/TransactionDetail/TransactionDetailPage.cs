
namespace SereneInventory.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventory/TransactionDetail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TransactionDetailRow))]
    public class TransactionDetailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/TransactionDetail/TransactionDetailIndex.cshtml");
        }
    }
}