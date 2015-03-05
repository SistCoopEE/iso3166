'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var SubdivisionSchema = new Schema({
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
    subdivisionCode: {
        type: String,
        required: true,
        trim: true
    },
    subdivisionFootnote: {
        type: String,
        required: true,
        trim: true
    },
    subdivisionParent: {
        type: String,
        required: true,
        trim: true
    }
});

/**
 * Validations
 */
SubdivisionSchema.path('alpha2Code').validate(function(alpha2Code) {
    return alpha2Code.length === 2;
}, 'Alpha2code length must be 2');

SubdivisionSchema.path('alpha3Code').validate(function(alpha3Code) {
    return alpha3Code.length === 3;
}, 'Alpha3code length must be 3');

SubdivisionSchema.path('numericCode').validate(function(numericCode) {
    return numericCode.length === 3;
}, 'NmericCode length must be 3');

/**
 * Statics
 */
SubdivisionSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};

mongoose.model('Subdivisions', SubdivisionSchema);
