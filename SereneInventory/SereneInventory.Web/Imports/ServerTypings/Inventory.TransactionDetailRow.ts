namespace SereneInventory.Inventory {
    export interface TransactionDetailRow {
        Id?: number;
        TransactionId?: number;
        ProductId?: number;
        Quantity?: string;
        UnitPrice?: number;
        Amount?: number;
        TransactionTransactionType?: number;
        TransactionRefTransactionId?: number;
        TransactionTransactionNumber?: string;
        TransactionTransactionDate?: string;
        TransactionPartyId?: number;
        ProductName?: string;
        ProductProductType?: number;
        ProductProductCategoryId?: number;
        ProductDescription?: string;
        ProductImages?: string;
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
        export const localTextPrefix = 'Inventory.TransactionDetail';

        export declare const enum Fields {
            Id = "Id",
            TransactionId = "TransactionId",
            ProductId = "ProductId",
            Quantity = "Quantity",
            UnitPrice = "UnitPrice",
            Amount = "Amount",
            TransactionTransactionType = "TransactionTransactionType",
            TransactionRefTransactionId = "TransactionRefTransactionId",
            TransactionTransactionNumber = "TransactionTransactionNumber",
            TransactionTransactionDate = "TransactionTransactionDate",
            TransactionPartyId = "TransactionPartyId",
            ProductName = "ProductName",
            ProductProductType = "ProductProductType",
            ProductProductCategoryId = "ProductProductCategoryId",
            ProductDescription = "ProductDescription",
            ProductImages = "ProductImages",
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

