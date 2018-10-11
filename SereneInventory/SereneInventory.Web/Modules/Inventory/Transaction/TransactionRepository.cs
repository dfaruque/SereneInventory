
using Serenity.Services;

namespace SereneInventory.Inventory.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.TransactionRow;

    public class TransactionRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, TransactionListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow, TransactionListRequest> {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                if (Request.ProductId != null)
                {
                    var td = Entities.TransactionDetailRow.Fields.As("td");

                    query.Where(Criteria.Exists(
                        query.SubQuery()
                            .Select("1")
                            .From(td)
                            .Where(
                                td.TransactionId == fld.Id &
                                td.ProductId == Request.ProductId.Value)
                            .ToString()));
                }
            }
        }
    }
}

namespace SereneInventory.Inventory
{
    public class TransactionListRequest : ListRequest
    {
        public int? ProductId { get; set; }
    }
}