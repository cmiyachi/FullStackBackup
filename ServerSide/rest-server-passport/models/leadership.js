// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// This adds the currency type to the available mongoose schema types.
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// Create the leadership schema.
var leadersSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

// Create the model using the leaders schema.
var leaders = mongoose.model('leader', leadersSchema);

module.exports = leaders;