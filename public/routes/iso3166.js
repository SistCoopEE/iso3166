'use strict';

angular.module('mean.iso3166').config(function($stateProvider) {

    var checkLoggedIn = function($q, $timeout, $http, $location) {
        var deferred = $q.defer();
        $http.get('/loggedin').success(function(user) {
            if (user !== '0') $timeout(deferred.resolve);
            else {
                $timeout(deferred.reject);
                $location.url('/auth/login');
            }
        });
        return deferred.promise;
    };

    $stateProvider
        .state('iso3166', {
            abstract: true,
            url: '/iso3166',
            templateUrl: 'iso3166/views/tpls/layout/body.html'
        })
        .state('iso3166.home', {
            url: '/home',
            templateUrl: 'iso3166/views/index.html'
        })
        .state('iso3166.searchCountryCode', {
            url: '/searchCountryCode',
            templateUrl: 'iso3166/views/country/form-search-countryCode.html',
            controller: 'SearchCountryCodeController'
        })
        .state('iso3166.createCountryCode', {
            url: '/countryCode',
            templateUrl: 'iso3166/views/country/form-create-countryCode.html',
            controller: 'CreateCountryCodeController',
            resolve: {
                loggedIn: checkLoggedIn
            }
        })
        .state('iso3166.editCountryCode', {
            url: '/countryCode/:alpha3Code',
            templateUrl: 'iso3166/views/country/form-edit-countryCode.html',
            controller: 'EditCountryCodeController',
            resolve: {
                countryCode: function($state, $stateParams, CountryCode) {
                    return CountryCode.$findByAlpha3code($stateParams.alpha3Code);
                }
            }
        }).state('iso3166.editCountryCode.dashboard', {
            url: '/dashboard',
            templateUrl: 'iso3166/views/country/form-dashboard-countryCode.html'
        }).state('iso3166.editCountryCode.countryCode', {
            url: '/countryCode',
            templateUrl: 'iso3166/views/country/form-countryCode.html',
            controller: 'UpdateCountryCodeController',
            resolve: {
                loggedIn: checkLoggedIn,
                countryCode: function($state, $stateParams, CountryCode) {
                    return CountryCode.$findByAlpha3code($stateParams.alpha3Code);
                }
            }
        }).state('iso3166.editCountryCode.countryNames', {
            url: '/countryNames',
            templateUrl: 'iso3166/views/country/form-countryNames.html',
            controller: 'CreateCountryNameController',
            resolve: {
                loggedIn: checkLoggedIn,
                countryCode: function($state, $stateParams, CountryCode) {
                    return CountryCode.$findByAlpha3code($stateParams.alpha3Code);
                }
            }
        }).state('iso3166.editCountryCode.languages', {
            url: '/languages',
            templateUrl: 'iso3166/views/country/form-languages.html',
            controller: 'CreateLanguageController',
            resolve: {
                loggedIn: checkLoggedIn,
                countryCode: function($state, $stateParams, CountryCode) {
                    return CountryCode.$findByAlpha3code($stateParams.alpha3Code);
                }
            }
        }).state('iso3166.editCountryCode.territories', {
            url: '/territories',
            templateUrl: 'iso3166/views/country/form-territories.html',
            controller: 'CreateTerritoryController',
            resolve: {
                loggedIn: checkLoggedIn,
                countryCode: function($state, $stateParams, CountryCode) {
                    return CountryCode.$findByAlpha3code($stateParams.alpha3Code);
                }
            }
        }).state('iso3166.editCountryCode.subdivisionCategories', {
            url: '/subdivisionCategories',
            templateUrl: 'iso3166/views/country/form-subdivisionCategories.html',
            controller: 'CreateSubdivisionCategoryController',
            resolve: {
                loggedIn: checkLoggedIn,
                countryCode: function($state, $stateParams, CountryCode) {
                    return CountryCode.$findByAlpha3code($stateParams.alpha3Code);
                }
            }
        }).state('iso3166.editCountryCode.subdivisions', {
            url: '/subdivisions',
            templateUrl: 'iso3166/views/country/form-subdivisions.html',
            resolve: {
                loggedIn: checkLoggedIn
            }
        }).state('iso3166.editCountryCode.subdivisionNames', {
            url: '/subdivisionNames',
            templateUrl: 'iso3166/views/country/form-subdivisionNames.html',
            resolve: {
                loggedIn: checkLoggedIn
            }
        });
});
