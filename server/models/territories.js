'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var TerritoriesSchema = new Schema({
    alpha2Code: {
        type: String,
        required: true,
        trim: true
    },
    alpha3Code: {
        type: String,
        required: true,
        trim: true
    },
    numericCode: {
        type: String,
        required: true,
        trim: true
    },
    territoryId: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    territoryName: {
        type: String,
        required: true,
        trim: true
    }
});

/**
 * Validations
 */
TerritoriesSchema.path('alpha2Code').validate(function(alpha2Code) {
    return alpha2Code.length === 2;
}, 'Alpha2code length must be 2');

TerritoriesSchema.path('alpha3Code').validate(function(alpha3Code) {
    return alpha3Code.length === 3;
}, 'Alpha3code length must be 3');

TerritoriesSchema.path('numericCode').validate(function(numericCode) {
    return numericCode.length === 3;
}, 'NmericCode length must be 3');

/**
 * Statics
 */
TerritoriesSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Territories', TerritoriesSchema);
