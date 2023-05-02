const mongoose = require('mongoose');

const schemaReactions = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
    },

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

}, {
    timestamps: { createdAt: 'createdAt'}
});

module.exports = schemaReactions;