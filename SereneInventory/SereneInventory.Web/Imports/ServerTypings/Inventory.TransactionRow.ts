namespace SereneInventory.Inventory {
    export interface TransactionRow {
        Id?: number;
        TransactionType?: TransactionType;
        RefTransactionId?: number;
        TransactionNumber?: string;
        TransactionDate?: string;
        PartyId?: number;
        RefTransactionTransactionType?: number;
        RefTransactionRefTransactionId?: number;
        RefTransactionTransactionNumber?: string;
        RefTransactionTransactionDate?: string;
        RefTransactionPartyId?: number;
        PartyPartyType?: number;
        PartyName?: string;
        PartyAddress?: string;
        PartyContact?: string;
        TransactionDetailRows?: TransactionDetailRow[];
        RelatedTransactionRows?: TransactionRow[];
        TotalQuantity?: number;
        TotalAmount?: number;
        RemainingQuantity?: number;
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
            RefTransactionId = "RefTransactionId",
            TransactionNumber = "TransactionNumber",
            TransactionDate = "TransactionDate",
            PartyId = "PartyId",
            RefTransactionTransactionType = "RefTransactionTransactionType",
            RefTransactionRefTransactionId = "RefTransactionRefTransactionId",
            RefTransactionTransactionNumber = "RefTransactionTransactionNumber",
            RefTransactionTransactionDate = "RefTransactionTransactionDate",
            RefTransactionPartyId = "RefTransactionPartyId",
            PartyPartyType = "PartyPartyType",
            PartyName = "PartyName",
            PartyAddress = "PartyAddress",
            PartyContact = "PartyContact",
            TransactionDetailRows = "TransactionDetailRows",
            RelatedTransactionRows = "RelatedTransactionRows",
            TotalQuantity = "TotalQuantity",
            TotalAmount = "TotalAmount",
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

