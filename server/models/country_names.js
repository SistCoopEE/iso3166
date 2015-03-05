'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var CountryNamesSchema = new Schema({
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
    shortName: {
        type: String,
        required: true,
        trim: true
    },
    shortNameUppercase: {
        type: String,
        required: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    }
});

/**
 * Validations
 */
CountryNamesSchema.path('alpha2Code').validate(function(alpha2Code) {
    return alpha2Code.length === 2;
}, 'Alpha2code length must be 2');

CountryNamesSchema.path('alpha3Code').validate(function(alpha3Code) {
    return alpha3Code.length === 3;
}, 'Alpha3code length must be 3');

CountryNamesSchema.path('numericCode').validate(function(numericCode) {
    return numericCode.length === 3;
}, 'NumericCode length must be 3');

CountryNamesSchema.path('languageAlpha3Code').validate(function(languageAlpha3Code) {
    return languageAlpha3Code.length === 3;
}, 'LanguageAlpha3Code length must be 3');

/**
 * Statics
 */
CountryNamesSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Country_names', CountryNamesSchema);
