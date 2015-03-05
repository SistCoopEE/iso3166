'use strict';

/* jshint -W098 */
angular.module('mean.iso3166').controller('CreateTerritoryController', function($scope, $state, countryCode, Territory) {

    $scope.countryCode = countryCode;
    $scope.territory = Territory.$build();

    $scope.territory.alpha3Code = $scope.countryCode.alpha3Code;
    $scope.territory.alpha2Code = $scope.countryCode.alpha2Code;
    $scope.territory.numericCode = $scope.countryCode.numericCode;

    $scope.submit = function(){
        if($scope.form.$valid){
            $scope.territory.$save().then(function(){
                $scope.loadTerritories();
            });
        }
    };

    $scope.loadTerritories = function(){
        Territory.$search({alpha3Code: $scope.countryCode.alpha3Code}).then(function(response){
            $scope.territories = response;
        });
    }

});
