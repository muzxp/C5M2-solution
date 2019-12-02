(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buy = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {name:'Cookies','quantity': 3},
    {name:'Chips','quantity': 4},
    {name:'Sugary Drinks','quantity': 10},
    {name:'Red Bismol','quantity': 7},
    {name:'Blue Bismol','quantity': 8}
  ];
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var bought = toBuyItems.splice(itemIndex, 1)
    boughtItems.push(bought[0]); 
  };

  service.getToBuyItems = function () {
    return toBuyItems;;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
