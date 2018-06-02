namespace SereneInventory.Administration {
    export interface TenantRow {
        Id?: number;
        Name?: string;
        Description?: string;
        Remarks?: string;
        IUserId?: number;
        TenantId?: number;
        EUserId?: number;
        RowNum?: number;
        IDate?: string;
        EDate?: string;
    }

    export namespace TenantRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Administration.Tenant';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Description = "Description",
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

