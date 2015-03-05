'use strict';

var country_codes = require('../controllers/country_codes');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Iso3166, app, auth, database) {

    app.route('/country_codes')
        .get(country_codes.all)
        .post(auth.requiresAdmin, country_codes.create);

    app.route('/country_codes/alpha3code/:alpha3Code')
        .get(country_codes.findByAlpha3Code);

    app.route('/country_codes/count')
        .get(country_codes.count);

    app.route('/country_codes/:alpha3Code')
        .get()
        .put(auth.requiresAdmin, country_codes.update)
        .delete(auth.requiresAdmin, country_codes.destroy);

    app.param('alpha3Code', country_codes.countryCode);

};
