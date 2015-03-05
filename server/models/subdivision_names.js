'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var SubdivisionNamesSchema = new Schema({
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
    subdivisionCategoryId: {
        type: String,
        required: true,
        trim: true
    },
    language: {
        type: String,
        required: true,
        trim: true
    },
    languageAlpha3Code: {
        type: String,
        required: true,
        trim: true
    },
    subdivisionName: {
        type: String,
        required: true,
        trim: true
    },
    romanizationSystem: {
        type: String,
        required: true,
        trim: true
    }
});

/**
 * Validations
 */
SubdivisionNamesSchema.path('alpha2Code').validate(function(alpha2code) {
    return alpha2code.length === 2;
}, 'Alpha2Code length must be 2');

SubdivisionNamesSchema.path('alpha3Code').validate(function(alpha3code) {
    return alpha3code.length === 3;
}, 'Alpha3Code length must be 2');

SubdivisionNamesSchema.path('languageAlpha3Code').validate(function(languageAlpha3Code) {
    return languageAlpha3Code.length === 3;
}, 'LanguageAlpha3Code length must be 3');

/**
 * Statics
 */
SubdivisionNamesSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Subdivision_names', SubdivisionNamesSchema);