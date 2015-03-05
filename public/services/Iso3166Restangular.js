'use strict';

angular.module('mean.iso3166').constant('CONFIGURATION', {
    'restUrl': {
        'iso3166': 'http://localhost:3000'
    }
});

angular.module('mean.iso3166').factory('Iso3166Restangular', function(Restangular, CONFIGURATION) {
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl(CONFIGURATION.restUrl.iso3166);
    });
});
