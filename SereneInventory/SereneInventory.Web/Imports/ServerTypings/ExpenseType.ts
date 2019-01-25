namespace SereneInventory {
    export enum ExpenseType {
        Transportation = 10,
        Media = 20,
        Delivery = 30,
        Misc = 40
    }
    Serenity.Decorators.registerEnumType(ExpenseType, 'SereneInventory.ExpenseType');
}

