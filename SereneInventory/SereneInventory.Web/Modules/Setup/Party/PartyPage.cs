
namespace SereneInventory.Setup.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Setup/Party"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PartyRow))]
    public class PartyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Setup/Party/PartyIndex.cshtml");
        }
    }
}