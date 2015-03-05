'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var CountryCodesSchema = new Schema({
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
    independent: {
        type: Boolean,
        required: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    shortNameEn: {
        type: String,
        required: true,
        trim: true
    },
    shortNameUppercaseEn: {
        type: String,
        required: true,
        trim: true
    },
    fullNameEn: {
        type: String,
        required: true,
        trim: true
    }
});

/**
 * Validations
 */
CountryCodesSchema.path('alpha2Code').validate(function(alpha2Code) {
    return alpha2Code.length === 2;
}, 'Alpha2code length must be 2');

CountryCodesSchema.path('alpha3Code').validate(function(alpha3Code) {
    return alpha3Code.length === 3;
}, 'Alpha3code length must be 3');

CountryCodesSchema.path('numericCode').validate(function(numericCode) {
    return numericCode.length === 3;
}, 'NumericCode length must be 3');

/**
 * Statics
 */
CountryCodesSchema.statics.load = function(id, cb) {
    this.findOne({
        alpha3Code: id
    }).exec(cb);
};

mongoose.model('Country_codes', CountryCodesSchema);
