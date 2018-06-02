using System.ComponentModel;

namespace SereneInventory
{
    public enum TransactionType
    {
        [Description("Purchase Invoice")]
        PurchaseInvoice = 10,
        [Description("Sales Invoice")]
        SalesInvoice = 20,
    }
}