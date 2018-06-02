namespace SereneInventory.Setup {
    export interface ProductRow {
        Id?: number;
        Name?: string;
        ProductType?: number;
        ProductCategoryId?: number;
        Description?: string;
        Images?: string;
        TenantId?: number;
        Remarks?: string;
        IUser?: string;
        EUser?: string;
        RowNum?: number;
        IDate?: string;
        EDate?: string;
    }

    export namespace ProductRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Setup.Product';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            ProductType = "ProductType",
            ProductCategoryId = "ProductCategoryId",
            Description = "Description",
            Images = "Images",
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

