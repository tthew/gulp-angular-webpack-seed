'use strict';

require('./orders.order.tpl.html');

var controller;
var app;

controller = require('./order.controller.js');

angular.module('tthew.orders.order.controller', [])
  .controller('OrderCtrl', controller);

app = angular.module('tthew.orders.order', [
  'tthew.orders.order.controller'
]);

app.config(function($stateProvider) {
  $stateProvider
    .state('orders.order', {
      url: '/:orderRef',
      templateUrl: 'orders.order.tpl.html',
      controller: 'OrderCtrl as vm',
    });
});

module.exports = app;
