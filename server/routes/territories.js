'use strict';

var Territories = require('../controllers/territories');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Iso3166, app, auth, database) {

    app.route('/territories')
        .get(Territories.all)
        .post(auth.requiresAdmin, Territories.create);

};
