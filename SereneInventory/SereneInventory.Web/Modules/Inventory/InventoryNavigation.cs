using Serenity.Navigation;
using SereneInventory.Inventory.Pages;
using MyPages = SereneInventory.Inventory.Pages;

[assembly: NavigationMenu(9000, "Inventory", icon: "fa-line-chart")]
//[assembly: NavigationLink(int.MaxValue, "Inventory/Transaction", typeof(MyPages.TransactionController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Purchase Invoice", typeof(MyPages.TransactionController), icon: null, action: nameof(TransactionController.PurchaseInvoiceIndex))]
[assembly: NavigationLink(int.MaxValue, "Inventory/Sales Invoice", typeof(MyPages.TransactionController), icon: null, action: nameof(TransactionController.SalesInvoiceIndex))]
