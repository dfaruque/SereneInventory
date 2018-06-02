namespace SereneInventory {
    export enum TransactionType {
        PurchaseInvoice = 10,
        SalesInvoice = 20
    }
    Serenity.Decorators.registerEnumType(TransactionType, 'SereneInventory.TransactionType');
}

