namespace SereneInventory.Inventory {
    export interface TransactionRow {
        Id?: number;
        TransactionType?: TransactionType;
        TransactionNumber?: string;
        TransactionDate?: string;
        PartyId?: number;
        PartyPartyType?: number;
        PartyName?: string;
        PartyAddress?: string;
        PartyContact?: string;
        TransactionDetailRows?: TransactionDetailRow[];
        TransactionExpenseRows?: TransactionExpenseRow[];
        TotalQuantity?: number;
        TotalAmount?: number;
        TotalExpense?: number;
        RemainingQuantity?: number;
        TotalRefferencedAmount?: number;
        Remarks?: string;
        IUserId?: number;
        TenantId?: number;
        EUserId?: number;
        RowNum?: number;
        IDate?: string;
        EDate?: string;
    }

    export namespace TransactionRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TransactionNumber';
        export const localTextPrefix = 'Inventory.Transaction';
        export const lookupKey = 'Inventory.Transaction';

        export function getLookup(): Q.Lookup<TransactionRow> {
            return Q.getLookup<TransactionRow>('Inventory.Transaction');
        }

        export declare const enum Fields {
            Id = "Id",
            TransactionType = "TransactionType",
            TransactionNumber = "TransactionNumber",
            TransactionDate = "TransactionDate",
            PartyId = "PartyId",
            PartyPartyType = "PartyPartyType",
            PartyName = "PartyName",
            PartyAddress = "PartyAddress",
            PartyContact = "PartyContact",
            TransactionDetailRows = "TransactionDetailRows",
            TransactionExpenseRows = "TransactionExpenseRows",
            TotalQuantity = "TotalQuantity",
            TotalAmount = "TotalAmount",
            TotalExpense = "TotalExpense",
            RemainingQuantity = "RemainingQuantity",
            TotalRefferencedAmount = "TotalRefferencedAmount",
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

