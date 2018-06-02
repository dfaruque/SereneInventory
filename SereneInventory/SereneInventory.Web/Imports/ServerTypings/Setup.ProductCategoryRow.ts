namespace SereneInventory.Setup {
    export interface ProductCategoryRow {
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

    export namespace ProductCategoryRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Setup.ProductCategory';

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

