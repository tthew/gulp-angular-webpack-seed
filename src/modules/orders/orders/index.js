var directive = require('./orders.directive.js');

var app = angular.module('tthew.orders.orders.directive', [])
  .directive('orders', directive);

module.exports = app;
