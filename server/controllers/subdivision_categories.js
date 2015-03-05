'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Subdivision_categories = mongoose.model('Subdivision_categories'),
    _ = require('lodash');

/**
 * Create a country
 */
exports.create = function(req, res) {
    var country = new Subdivision_categories(req.body);
    country.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the Subdivision_categories'
            });
        }
        res.json(country);
    });
};

exports.all = function(req, res) {
    Subdivision_categories
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