namespace SereneInventory.Setup {
    export interface ProductRow {
        Id?: number;
        Name?: string;
        ProductType?: ProductType;
        ProductCategoryId?: number;
        Description?: string;
        Images?: string;
        ProductCategoryName?: string;
        ProductCategoryDescription?: string;
        Remarks?: string;
        IUserId?: number;
        TenantId?: number;
        EUserId?: number;
        RowNum?: number;
        IDate?: string;
        EDate?: string;
    }

    export namespace ProductRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Setup.Product';
        export const lookupKey = 'Setup.Product';

        export function getLookup(): Q.Lookup<ProductRow> {
            return Q.getLookup<ProductRow>('Setup.Product');
        }

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            ProductType = "ProductType",
            ProductCategoryId = "ProductCategoryId",
            Description = "Description",
            Images = "Images",
            ProductCategoryName = "ProductCategoryName",
            ProductCategoryDescription = "ProductCategoryDescription",
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

