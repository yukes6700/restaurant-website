var mongoose = require('mongoose');

// Page Schema
var PageSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sorting: {
        type: Number,
        required: true
    },
    sorting: {
        type: Number
    }

});

var Page = module.exports = mongoose.model('Page', PageSchema);