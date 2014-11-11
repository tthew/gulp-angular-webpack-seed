// Templates
require('./orders.tpl.html');

// Styles
require('./orders.scss');
require('./orders/index.js');
require('./order');

var service = require('./orders.service.js');
var controller = require('./orders.controller.js');

angular.module('tthew.orders.controller', [])
  .controller('OrdersCtrl', controller);

angular.module('tthew.orders.service', [])
  .factory('ordersService', service);

var app = angular.module('tthew.orders', [
  'tthew.orders.service',
  'tthew.orders.controller',
  'tthew.orders.order',
  'tthew.orders.orders.directive'
]);

// States
app.config(function ($stateProvider, $translateProvider) {
  $stateProvider
    .state('orders', {
      url: '/orders',
      templateUrl: 'orders.tpl.html',
      controller: 'OrdersCtrl as vm',
      resolve: {
        orders: function (ordersService) {
          return ordersService.getOrders();
        }
      }
    });

  $translateProvider.translations('en', require('./lang/en.json'));
});

module.exports = app;
