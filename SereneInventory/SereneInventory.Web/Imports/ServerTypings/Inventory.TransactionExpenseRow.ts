namespace SereneInventory.Inventory {
    export interface TransactionExpenseRow {
        Id?: number;
        TransactionId?: number;
        ExpenseType?: ExpenseType;
        Amount?: number;
        TransactionTransactionType?: number;
        TransactionRefTransactionId?: number;
        TransactionTransactionNumber?: string;
        TransactionTransactionDate?: string;
        TransactionPartyId?: number;
        Remarks?: string;
        IUserId?: number;
        TenantId?: number;
        EUserId?: number;
        RowNum?: number;
        IDate?: string;
        EDate?: string;
    }

    export namespace TransactionExpenseRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Inventory.TransactionExpense';

        export declare const enum Fields {
            Id = "Id",
            TransactionId = "TransactionId",
            ExpenseType = "ExpenseType",
            Amount = "Amount",
            TransactionTransactionType = "TransactionTransactionType",
            TransactionRefTransactionId = "TransactionRefTransactionId",
            TransactionTransactionNumber = "TransactionTransactionNumber",
            TransactionTransactionDate = "TransactionTransactionDate",
            TransactionPartyId = "TransactionPartyId",
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

