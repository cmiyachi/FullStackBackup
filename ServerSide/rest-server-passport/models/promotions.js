// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// This adds the currency type to the available mongoose schema types.
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// Create the promotions schema.
var promotionsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        // Defaults to an empty string if not specified.
        default: ''
    },
    price: {
        // Uses the Currency type provided by mongoose-currency.
        type: Currency,
        required: true
    },
    description: {
        type: String,
        required: true
    },
},{
    timestamps: true
});

// Create the model using the promotions schema.
var Promotions = mongoose.model('Promotion', promotionsSchema);

module.exports = Promotions;
