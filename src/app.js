/*** VENDOR ***/
require('bower/bootstrap-sass-official/assets/stylesheets/_bootstrap.scss');
require('bower/lodash/dist/lodash.js');
require('bower/foundation/css/normalize.css');
require('bower/angular-ui-router/release/angular-ui-router');
require('bower/angular-sanitize/angular-sanitize.js');
require('bower/angular-animate/angular-animate.js');
require('bower/restangular/src/restangular.js');
require('bower/angular-translate/angular-translate.js');

$ = require('jquery');

/*** APPLICATION ***/

// Config
require('../config/_default.js');

// Locale
require('./locale/en-gb.js');

// Modules
require('./modules/orders');

// SCSS
require('./scss/app.scss');

// Init App
var app = angular.module('tthew.app', [
  // Vendor
  'ngSanitize',
  'ui.router',
  'restangular',
  'pascalprecht.translate',
  // Modules
  'tthew.orders',
  // App
  'tthew.config'
]);

// App config
app.config(function ($urlRouterProvider, $translateProvider) {
  $urlRouterProvider.otherwise('/orders');
  $translateProvider.preferredLanguage('en');
});

module.exports = app
