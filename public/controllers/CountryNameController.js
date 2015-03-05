'use strict';

/* jshint -W098 */
angular.module('mean.iso3166').controller('CreateCountryNameController', function($scope, $state, countryCode, CountryName) {

    $scope.countryCode = countryCode;
    $scope.countryName = CountryName.$build();

    $scope.countryName.alpha3Code = $scope.countryCode.alpha3Code;
    $scope.countryName.alpha2Code = $scope.countryCode.alpha2Code;
    $scope.countryName.numericCode = $scope.countryCode.numericCode;

    $scope.submit = function(){
        if($scope.form.$valid){
            $scope.countryName.$save().then(function(){
                $scope.loadCountryNames();
            });
        }
    };

    $scope.loadCountryNames = function(){
        CountryName.$search({alpha3Code: $scope.countryCode.alpha3Code}).then(function(response){
            $scope.countryNames = response;
        });
    }

});
