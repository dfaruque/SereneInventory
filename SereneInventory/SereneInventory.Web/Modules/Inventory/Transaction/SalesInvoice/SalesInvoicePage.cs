
namespace SereneInventory.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventory/SalesInvoice"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TransactionRow))]
    public class SalesInvoiceController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Inventory.Transaction.SalesInvoice.SalesInvoiceIndex);
        }

    }
}