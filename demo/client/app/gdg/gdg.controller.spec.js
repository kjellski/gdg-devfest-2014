'use strict';

describe('Controller: GdgCtrl', function () {

  // load the controller's module
  beforeEach(module('gdgDevFest2014App'));

  var GdgCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GdgCtrl = $controller('GdgCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
