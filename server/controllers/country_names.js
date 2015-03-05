'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Country_names = mongoose.model('Country_names');


/**
 * Create a country name
 */
exports.create = function(req, res) {
    var country_name = new Country_names(req.body);
    country_name.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the country_name'
            });
        }
        res.json(country_name);
    });
};

exports.all = function(req, res) {
    Country_names
        .find()
        .or([
            req.query
        ])
        .exec(function(err, country_names) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the countries'
                });
            }
            res.json(country_names);
        });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.json(req.country);
};