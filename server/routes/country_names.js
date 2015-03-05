'use strict';

var country_names = require('../controllers/country_names');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Iso3166, app, auth, database) {

    app.route('/country_names')
        .get(country_names.all)
        .post(auth.requiresAdmin, country_names.create);

};
