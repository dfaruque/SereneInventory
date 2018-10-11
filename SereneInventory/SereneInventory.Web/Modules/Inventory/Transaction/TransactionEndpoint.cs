
namespace SereneInventory.Inventory.Endpoints
{
    using System;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
	using Serenity.Web;
	using Serenity.Reporting;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.TransactionRepository;
    using MyRow = Entities.TransactionRow;

    [RoutePrefix("Services/Inventory/Transaction"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class TransactionController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, TransactionListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

		public FileContentResult ListExcel(IDbConnection connection, TransactionListRequest request) {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.TransactionColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "TransactionList_" + DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
