'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var SubdivisionCategoriesSchema = new Schema({
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
    categoryId: {
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
    categoryName: {
        type: String,
        required: true,
        trim: true
    },
    categoryNamePlural: {
        type: String,
        required: true,
        trim: true
    }
});

/**
 * Validations
 */
SubdivisionCategoriesSchema.path('alpha2Code').validate(function(alpha2Code) {
    return alpha2Code.length === 2;
}, 'Alpha2code length must be 2');

SubdivisionCategoriesSchema.path('alpha3Code').validate(function(alpha3Code) {
    return alpha3Code.length === 3;
}, 'Alpha3code length must be 3');

SubdivisionCategoriesSchema.path('numericCode').validate(function(numericCode) {
    return numericCode.length === 3;
}, 'NmericCode length must be 3');

SubdivisionCategoriesSchema.path('languageAlpha3Code').validate(function(languageAlpha3Code) {
    return languageAlpha3Code.length === 3;
}, 'NmericCode length must be 3');

/**
 * Statics
 */
SubdivisionCategoriesSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Subdivision_categories', SubdivisionCategoriesSchema);
