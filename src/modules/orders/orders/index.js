'use strict';
var directive;
var app;

directive = require('./orders.directive.js');

app = angular.module('tthew.orders.orders.directive', [])
  .directive('orders', directive);

module.exports = app;
