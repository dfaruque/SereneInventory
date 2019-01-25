namespace SereneInventory.Inventory {
    export interface TransactionDetailRow {
        Id?: number;
        TransactionId?: number;
        RefTransactionDetailId?: number;
        ProductId?: number;
        Quantity?: number;
        UnitPrice?: number;
        Amount?: number;
        TransactionTransactionType?: number;
        TransactionRefTransactionId?: number;
        TransactionTransactionNumber?: string;
        TransactionTransactionDate?: string;
        TransactionPartyId?: number;
        RefTransactionDetailTransactionId?: number;
        RefTransactionTransactionType?: number;
        RefTransactionRefTransactionId?: number;
        RefTransactionTransactionNumber?: string;
        RefTransactionTransactionDate?: string;
        RefTransactionPartyId?: number;
        ProductName?: string;
        ProductProductType?: number;
        ProductProductCategoryId?: number;
        ProductDescription?: string;
        ProductImages?: string;
        LookupText?: string;
        RemainingQuantity?: number;
        Remarks?: string;
        IUserId?: number;
        TenantId?: number;
        EUserId?: number;
        RowNum?: number;
        IDate?: string;
        EDate?: string;
    }

    export namespace TransactionDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'LookupText';
        export const localTextPrefix = 'Inventory.TransactionDetail';
        export const lookupKey = 'Inventory.TransactionDetail';

        export function getLookup(): Q.Lookup<TransactionDetailRow> {
            return Q.getLookup<TransactionDetailRow>('Inventory.TransactionDetail');
        }

        export declare const enum Fields {
            Id = "Id",
            TransactionId = "TransactionId",
            RefTransactionDetailId = "RefTransactionDetailId",
            ProductId = "ProductId",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Amount = "Amount",
            TransactionTransactionType = "TransactionTransactionType",
            TransactionRefTransactionId = "TransactionRefTransactionId",
            TransactionTransactionNumber = "TransactionTransactionNumber",
            TransactionTransactionDate = "TransactionTransactionDate",
            TransactionPartyId = "TransactionPartyId",
            RefTransactionDetailTransactionId = "RefTransactionDetailTransactionId",
            RefTransactionTransactionType = "RefTransactionTransactionType",
            RefTransactionRefTransactionId = "RefTransactionRefTransactionId",
            RefTransactionTransactionNumber = "RefTransactionTransactionNumber",
            RefTransactionTransactionDate = "RefTransactionTransactionDate",
            RefTransactionPartyId = "RefTransactionPartyId",
            ProductName = "ProductName",
            ProductProductType = "ProductProductType",
            ProductProductCategoryId = "ProductProductCategoryId",
            ProductDescription = "ProductDescription",
            ProductImages = "ProductImages",
            LookupText = "LookupText",
            RemainingQuantity = "RemainingQuantity",
            Remarks = "Remarks",
            IUserId = "IUserId",
            TenantId = "TenantId",
            EUserId = "EUserId",
            RowNum = "RowNum",
            IDate = "IDate",
            EDate = "EDate"
        }
    }
}

