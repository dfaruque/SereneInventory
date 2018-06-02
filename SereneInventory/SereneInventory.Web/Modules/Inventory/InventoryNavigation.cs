using Serenity.Navigation;
using MyPages = SereneInventory.Inventory.Pages;

[assembly: NavigationLink(int.MaxValue, "Inventory/Transaction", typeof(MyPages.TransactionController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Inventory/Transaction Detail", typeof(MyPages.TransactionDetailController), icon: null)]