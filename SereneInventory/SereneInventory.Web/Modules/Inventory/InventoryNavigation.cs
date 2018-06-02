using Serenity.Navigation;
using MyPages = SereneInventory.Inventory.Pages;

[assembly: NavigationMenu(9000, "Inventory", icon: "fa-line-chart")]
[assembly: NavigationLink(int.MaxValue, "Inventory/Transaction", typeof(MyPages.TransactionController), icon: null)]
