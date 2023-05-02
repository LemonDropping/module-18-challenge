// const mongoose = require('mongoose');
const formatDate = require('../utils/formatDate');

const schemaReactions = new mongoose.Schema({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },

    username: {
        type: String,
        required: true,
        trim: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => formatDate(timestamp)
    }
});

module.exports = mongoose.model('Reaction', schemaReactions);