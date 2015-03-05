'use strict';

/* jshint -W098 */
angular.module('mean.iso3166').controller('CreateCountryCodeController', function($scope, $state, CountryCode) {

    $scope.country = CountryCode.$build();

    $scope.create = function(){
        if($scope.form.$valid){
            $scope.country.$save().then(function(response){
                $state.go('iso3166.editCountryCode.dashboard', {alpha3Code: $scope.country.alpha3Code});
            });
        }
    };

}).controller('EditCountryCodeController', function($scope, countryCode, CountryCode) {

    $scope.country = countryCode;

}).controller('UpdateCountryCodeController', function($scope, countryCode, CountryCode) {

    $scope.country = countryCode;

    $scope.submit = function(){
        if($scope.form.$valid){
            $scope.country.$save().then(function(response){
            });
        }
    };

}).controller('SearchCountryCodeController', function($scope, $state, CountryCode){

    $scope.filterOptions = {
        filterText: undefined,
        firstResult: 0,
        maxResults: 25
    };

    $scope.gridOptions = {
        data: [],
        totalItems: 100,

        paginationPageSizes: [25, 50, 75],
        paginationPageSize: 25,
        useExternalPagination: true,

        enableRowSelection: true,
        enableRowHeaderSelection: false,
        multiSelect: false,

        columnDefs: [
            {field: 'alpha2Code', displayName: 'Alpha2'},
            {field: 'alpha3Code', displayName: 'Alpha3'},
            {field: 'numericCode', displayName: 'Numeric'},
            {field: 'independent', displayName: 'Independent'},
            {field: 'status', displayName: 'Status'},
            {field: 'shortNameEn', displayName: 'Short name'},
            {field: 'shortNameUppercaseEn', displayName: 'Short name uppercase'},
            {field: 'fullNameEn', displayName: 'Full name'},
            {
                name: 'edit',
                displayName: 'Edit',
                cellTemplate: '<div style="text-align: center; padding-top: 4px;"><button type="button" ng-click="grid.appScope.gridActions.edit(row.entity)" class="btn btn-info btn-xs"><span class="glyphicon glyphicon-edit"></span>Edit</button></div>'
            }
        ],

        onRegisterApi: function(gridApi) {
            $scope.gridApi = gridApi;
            gridApi.pagination.on.paginationChanged($scope, function (newPage, pageSize) {
                $scope.filterOptions.firstResult = (newPage -1) * pageSize;
                $scope.filterOptions.maxResults = pageSize;
                $scope.search();
            });
        }
    };

    $scope.count = function(){
        CountryCode.$count().then(function(response){
            $scope.gridOptions.totalItems = response.count;
        });
    };
    $scope.count();

    $scope.search = function(resetPagination){
        if(resetPagination){
            $scope.filterOptions.firstResult = 0;
            $scope.gridOptions.data = CountryCode.$search($scope.filterOptions).$object;
        } else {
            $scope.gridOptions.data = CountryCode.$search($scope.filterOptions).$object;
        }
    };

    $scope.gridActions = {
        edit: function(row){
            $state.go('iso3166.editCountryCode.dashboard', {alpha3Code: row.alpha3Code});
        }
    };

});