'use strict';

var SubdivisionCategories = require('../controllers/subdivision_categories');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Iso3166, app, auth, database) {

    app.route('/subdivisionCategories')
        .get(SubdivisionCategories.all)
        .post(auth.requiresAdmin, SubdivisionCategories.create);

};
