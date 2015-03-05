'use strict';

var languages = require('../controllers/languages');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Iso3166, app, auth, database) {

    app.route('/languages')
        .get(languages.all)
        .post(auth.requiresAdmin, languages.create);

};
