'use strict';

angular.module('gdgDevFest2014App')
  .controller('GdgCtrl', function ($scope, $http, socket) {
    $scope.GDGs = []; // fixed with backend

    $http.get('/api/gdgs').success(function(gdgs) {
      $scope.GDGs = gdgs;
      socket.syncUpdates('gdg', $scope.GDGs);
    });

    $scope.addGDG = function() {
      if($scope.newGDG === '') {
        return;
      }
      $http.post('/api/gdgs', { name: $scope.newGDG });
      $scope.newGDG = '';
    };
  });
