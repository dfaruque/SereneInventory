namespace SereneInventory.Setup {
    export interface PartyRow {
        Id?: number;
        PartyType?: number;
        Name?: string;
        Address?: string;
        Contact?: string;
        Remarks?: string;
        IUserId?: number;
        TenantId?: number;
        EUserId?: number;
        RowNum?: number;
        IDate?: string;
        EDate?: string;
    }

    export namespace PartyRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Setup.Party';
        export const lookupKey = 'Setup.Party';

        export function getLookup(): Q.Lookup<PartyRow> {
            return Q.getLookup<PartyRow>('Setup.Party');
        }

        export declare const enum Fields {
            Id = "Id",
            PartyType = "PartyType",
            Name = "Name",
            Address = "Address",
            Contact = "Contact",
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

