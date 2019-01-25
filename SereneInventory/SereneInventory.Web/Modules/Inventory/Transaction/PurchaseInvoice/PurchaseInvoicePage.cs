
namespace SereneInventory.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventory/PurchaseInvoice"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TransactionRow))]
    public class PurchaseInvoiceController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Inventory.Transaction.PurchaseInvoice.PurchaseInvoiceIndex);
        }

    }
}