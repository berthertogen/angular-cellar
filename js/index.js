'use strict';

import { BookListCtrl } from "./books/bookCtrl.ts";

var angular = require('angular');
var ngRoute = require("angular-route");

angular.module('angularUpgrade', ['ngRoute']);

angular.module('angularUpgrade').component('wines', { templateUrl:'js/wines/wine-list.html', controller: require('./wines/wineCtrl')});
angular.module('angularUpgrade').component('books', { templateUrl:'js/books/book-list.html', controller: BookListCtrl});

angular.module('angularUpgrade').config(function($routeProvider, $locationProvider) {
  // $routeProvider.when('/books', {templateUrl:'js/books/book-list.html', controller:'BookListCtrl'});
  // $routeProvider.when('/wines', {templateUrl:'js/wines/wine-list.html', controller:'WineListCtrl'});
  $routeProvider.when('/wines', {template: '<wines></wines>'});
  $routeProvider.when('/books', {template: '<books></books>'});
  $routeProvider.otherwise({redirectTo:'/wines'});

    // // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});
