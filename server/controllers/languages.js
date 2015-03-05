'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Languages = mongoose.model('Languages');


/**
 * Create a country name
 */
exports.create = function(req, res) {
    var language = new Languages(req.body);
    language.save(function(err) {
        if (err) {
            return res.status(500).json({
                error: 'Cannot save the language'
            });
        }
        res.json(language);
    });
};

exports.all = function(req, res) {
    Languages
        .find()
        .or([
            req.query
        ])
        .exec(function(err, languages) {
            if (err) {
                return res.status(500).json({
                    error: 'Cannot list the languages'
                });
            }
            res.json(languages);
        });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.json(req.language);
};