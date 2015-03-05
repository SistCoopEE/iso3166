'use strict';

/* jshint -W098 */
angular.module('mean.iso3166').controller('CreateSubdivisionCategoryController', function($scope, $state, countryCode, SubdivisionCategory) {

    $scope.countryCode = countryCode;
    $scope.subdivisionCategory = SubdivisionCategory.$build();

    $scope.subdivisionCategory.alpha3Code = $scope.countryCode.alpha3Code;
    $scope.subdivisionCategory.alpha2Code = $scope.countryCode.alpha2Code;
    $scope.subdivisionCategory.numericCode = $scope.countryCode.numericCode;

    $scope.submit = function(){
        if($scope.form.$valid){
            $scope.subdivisionCategory.$save().then(function(){
                $scope.loadSubdivisionCategories();
            });
        }
    };

    $scope.loadSubdivisionCategories = function(){
        SubdivisionCategory.$search({alpha3Code: $scope.countryCode.alpha3Code}).then(function(response){
            $scope.subdivisionCategories = response;
        });
    }

});
