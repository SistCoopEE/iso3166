'use strict';

/* jshint -W098 */
angular.module('mean.iso3166').controller('Iso3166Controller', ['$scope', 'Global', 'Iso3166',
  function($scope, Global, Iso3166) {
    $scope.global = Global;
    $scope.package = {
      name: 'iso3166'
    };
  }
]);
