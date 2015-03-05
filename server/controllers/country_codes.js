'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Country_codes = mongoose.model('Country_codes'),
    _ = require('lodash');


/**
 * Find article by id
 */
exports.countryCode = function(req, res, next, id) {
    Country_codes.load(id, function(err, countryCode){
        if (err) return next(err);
        if (!countryCode) return next(new Error('Failed to load countryCode ' + id));
        req.countryCode = countryCode;
        next();
    });
};

/**
 * Find article by Alpha 3 code
 */
exports.findByAlpha3Code = function(req, res) {
    var alpha3Code = req.params.alpha3Code;
    Country_codes.findOne({alpha3Code: alpha3Code}, function(err, country){
        if (err) {
            return res.status(500).json({
                error: 'Cannot find country'
            });
        }
        res.json(country);
    });
};

/**
 * Create a country
 */
exports.create = function(req, res) {
    var country = new Country_codes(req.body);
    country.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the country'
            });
        }
        res.json(country);
    });
};

/**
 * Update an article
 */
exports.update = function(req, res, id) {

    var country_code = req.countryCode;

    country_code = _.extend(req.body);

    country_code.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot update the country'
            });
        }
        res.json(200, 'Update complete');
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var country = req.country;

    country.remove(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot delete the country'
            });
        }
        res.json(country);

    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.json(req.country);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
    var regex = new RegExp(req.query.filterText, 'i');
    var maxResults = req.query.maxResults;
    var firstResult = req.query.firstResult;

    Country_codes
        .find()
        .or([
            { alpha2code: { $regex: regex }},
            { alpha3code: { $regex: regex }},
            { numericCode: { $regex: regex }},
            { shortNameEn: { $regex: regex }},
            { shortNameUppercaseEn: { $regex: regex }},
            { fullNameEn: { $regex: regex }}
        ])
        .skip(firstResult)
        .limit(maxResults)
        .sort({ fullNameEn: 'asc' })
        .exec(function(err, countries) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the countries'
                });
            }
            res.json(countries);
        });
};

exports.count = function(req, res) {
    Country_codes.count({}, function(err, count){
        if (err) {
            return res.status(500).json({
                error: 'Cannot count countries'
            });
        }
        res.json({count: count});
    });
};