
namespace SereneInventory.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/Product"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductRow))]
    public class ProductController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/Product/ProductIndex.cshtml");
        }
    }
}