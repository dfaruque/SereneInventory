namespace SereneInventory.Inventory {
    export interface TransactionRow {
        Id?: number;
        TransactionType?: TransactionType;
        RefTransactionId?: number;
        TransactionNumber?: string;
        TransactionDate?: string;
        PartyId?: number;
        TenantId?: number;
        RefTransactionTransactionType?: number;
        RefTransactionRefTransactionId?: number;
        RefTransactionTransactionNumber?: string;
        RefTransactionTransactionDate?: string;
        RefTransactionPartyId?: number;
        RefTransactionTenantId?: number;
        Remarks?: string;
        IUserId?: number;
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
            RefTransactionId = "RefTransactionId",
            TransactionNumber = "TransactionNumber",
            TransactionDate = "TransactionDate",
            PartyId = "PartyId",
            TenantId = "TenantId",
            RefTransactionTransactionType = "RefTransactionTransactionType",
            RefTransactionRefTransactionId = "RefTransactionRefTransactionId",
            RefTransactionTransactionNumber = "RefTransactionTransactionNumber",
            RefTransactionTransactionDate = "RefTransactionTransactionDate",
            RefTransactionPartyId = "RefTransactionPartyId",
            RefTransactionTenantId = "RefTransactionTenantId",
            Remarks = "Remarks",
            IUserId = "IUserId",
            EUserId = "EUserId",
            RowNum = "RowNum",
            IDate = "IDate",
            EDate = "EDate"
        }
    }
}

