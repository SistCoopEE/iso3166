'use strict';

/* jshint -W098 */
angular.module('mean.iso3166').controller('CreateLanguageController', function($scope, $state, countryCode, Language) {

    $scope.countryCode = countryCode;
    $scope.language = Language.$build();

    $scope.language.alpha3Code = $scope.countryCode.alpha3Code;
    $scope.language.alpha2Code = $scope.countryCode.alpha2Code;
    $scope.language.numericCode = $scope.countryCode.numericCode;

    $scope.submit = function(){
        if($scope.form.$valid){
            $scope.language.$save().then(function(){
                $scope.loadLanguages();
            });
        }
    };

    $scope.loadLanguages = function(){
        Language.$search({alpha3Code: $scope.countryCode.alpha3Code}).then(function(response){
            $scope.languages = response;
        });
    }

});
