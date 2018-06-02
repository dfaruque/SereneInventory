
namespace SereneInventory.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/ProductCategory"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProductCategoryRow))]
    public class ProductCategoryController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/ProductCategory/ProductCategoryIndex.cshtml");
        }
    }
}