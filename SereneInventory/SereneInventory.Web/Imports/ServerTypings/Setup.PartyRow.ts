namespace SereneInventory.Setup {
    export interface PartyRow {
        Id?: number;
        PartyType?: number;
        Name?: string;
        Address?: string;
        Contact?: string;
        TenantId?: number;
        Remarks?: string;
        IUserId?: number;
        EUserId?: number;
        RowNum?: number;
        IDate?: string;
        EDate?: string;
    }

    export namespace PartyRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Setup.Party';

        export declare const enum Fields {
            Id = "Id",
            PartyType = "PartyType",
            Name = "Name",
            Address = "Address",
            Contact = "Contact",
            TenantId = "TenantId",
            Remarks = "Remarks",
            IUserId = "IUserId",
            EUserId = "EUserId",
            RowNum = "RowNum",
            IDate = "IDate",
            EDate = "EDate"
        }
    }
}

