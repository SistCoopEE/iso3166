'use strict';

var Module = require('meanio').Module;

var Iso3166 = new Module('iso3166');

Iso3166.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Iso3166.routes(app, auth, database);

    Iso3166.aggregateAsset('js', '../lib/restangular/dist/restangular.min.js', {
        absolute: false
    });
    Iso3166.aggregateAsset('js', '../lib/underscore/underscore-min.js', {
        absolute: false
    });
    Iso3166.aggregateAsset('js', '../lib/angular-ui-grid/ui-grid.min.js', {
        absolute: false
    });

    Iso3166.aggregateAsset('css', '../lib/angular-ui-grid/ui-grid.css', {
        absolute: false
    });

    Iso3166.angularDependencies([
            'restangular',
            'ui.grid',
            'ui.grid.edit',
            'ui.grid.selection',
            'ui.grid.pagination'
        ]
    );

    Iso3166.menus.add({
        title: 'ISO3166',
        link: 'iso3166.searchCountryCode',
        roles: ['authenticated'],
        menu: 'main'
    });

    Iso3166.aggregateAsset('css', 'iso3166.css');

    return Iso3166;
});
