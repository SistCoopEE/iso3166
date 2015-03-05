'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var LanguagesSchema = new Schema({
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
    languageAlpha2Code: {
        type: String,
        required: true,
        trim: true
    },
    languageAlpha3Code: {
        type: String,
        required: true,
        trim: true
    },
    isAdministrative: {
        type: Boolean,
        required: true
    },
    sortingOrder: {
        type: String,
        required: true,
        trim: true
    }
});

/**
 * Validations
 */
LanguagesSchema.path('alpha2Code').validate(function(alpha2Code) {
    return alpha2Code.length === 2;
}, 'Alpha2code length must be 2');

LanguagesSchema.path('alpha3Code').validate(function(alpha3Code) {
    return alpha3Code.length === 3;
}, 'Alpha3code length must be 3');

LanguagesSchema.path('numericCode').validate(function(numericCode) {
    return numericCode.length === 3;
}, 'NmericCode length must be 3');

LanguagesSchema.path('languageAlpha2Code').validate(function(languageAlpha2Code) {
    return languageAlpha2Code.length === 2;
}, 'NmericCode length must be 2');

LanguagesSchema.path('languageAlpha3Code').validate(function(languageAlpha3Code) {
    return languageAlpha3Code.length === 3;
}, 'NmericCode length must be 3');

/**
 * Statics
 */
LanguagesSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Languages', LanguagesSchema);
