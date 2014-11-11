require('./orders.orders.tpl.html');

module.exports = function ($state) {
  return {
    restrict: 'E',
    templateUrl: 'orders.orders.tpl.html',
    scope: {
      orders: '=orders'
    },
    link: function (scope) {
      scope.vm = scope.vm || {};
      scope.vm.selectedOrders = [];

      scope.vm.checkAll = function (selected) {
        angular.forEach(scope.orders, function (order) {
          order.$selected = selected;
        });
      };

      scope.vm.viewOrder = function (orderRef) {
        $state.go('orders.order', {orderRef: orderRef});
      }
    }
  }
}
