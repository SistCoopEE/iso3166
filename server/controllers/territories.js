'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Territories = mongoose.model('Territories');


/**
 * Create a country name
 */
exports.create = function(req, res) {
    var territory = new Territories(req.body);
    territory.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: err//'Cannot save the territory'
            });
        }
        res.json(territory);
    });
};

exports.all = function(req, res) {
    Territories
        .find()
        .or([
            req.query
        ])
        .exec(function(err, territories) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the territories'
                });
            }
            res.json(territories);
        });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.json(req.territory);
};