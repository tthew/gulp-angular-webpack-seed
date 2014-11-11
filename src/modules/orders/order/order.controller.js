module.exports = function (orders, $stateParams, $state) {
  var vm = this;

  vm.order = _.find(orders, function (order) {
    return order.orderRef === $stateParams.orderRef;
  });

  vm.viewOrders = function () {
    $state.go('orders');
  }
}

