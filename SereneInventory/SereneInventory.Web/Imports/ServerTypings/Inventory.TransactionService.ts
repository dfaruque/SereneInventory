namespace SereneInventory.Inventory {
    export namespace TransactionService {
        export const baseUrl = 'Inventory/Transaction';

        export declare function Create(request: Serenity.SaveRequest<TransactionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TransactionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransactionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: TransactionListRequest, onSuccess?: (response: Serenity.ListResponse<TransactionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Inventory/Transaction/Create",
            Update = "Inventory/Transaction/Update",
            Delete = "Inventory/Transaction/Delete",
            Retrieve = "Inventory/Transaction/Retrieve",
            List = "Inventory/Transaction/List",
            GetNextNumber = "Inventory/Transaction/GetNextNumber"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetNextNumber'
        ].forEach(x => {
            (<any>TransactionService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

