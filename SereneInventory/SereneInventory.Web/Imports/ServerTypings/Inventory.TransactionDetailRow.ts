namespace SereneInventory.Inventory {
    export interface TransactionDetailRow {
        Id?: number;
        TransactionId?: number;
        ProductId?: number;
        Quantity?: string;
        UnitPrice?: number;
        Amount?: number;
        TenantId?: number;
        Remarks?: string;
        IUser?: string;
        EUser?: string;
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
            TenantId = "TenantId",
            Remarks = "Remarks",
            IUser = "IUser",
            EUser = "EUser",
            RowNum = "RowNum",
            IDate = "IDate",
            EDate = "EDate"
        }
    }
}

