/// <reference path="../_ext/_q/_q.ts" />

namespace SereneInventory {

    export function getTrasactionTypeFromUrl(): TransactionType {
        if (location.href.indexOf('PurchaseInvoice') > 0)
            return TransactionType.PurchaseInvoice

        if (location.href.indexOf('SalesInvoice') > 0)
            return TransactionType.SalesInvoice
    }

    export function getTrasactionTypeName(transactionType: TransactionType): string {

        return q.getEnumText('SereneInventory.TransactionType', transactionType);

    }

    export function getTrasactionNumberCaption(transactionType: TransactionType): string {

        return 'Invoice Number';
    }
}
