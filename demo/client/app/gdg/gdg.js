'use strict';

angular.module('gdgDevFest2014App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gdg', {
        url: '/gdg',
        templateUrl: 'app/gdg/gdg.html',
        controller: 'GdgCtrl'
      });
  });