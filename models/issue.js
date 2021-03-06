const mongoose = require('mongoose');

const Comment = {
    username: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}

const IssueSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        required: true,
        default: true //true - open, false - closed
    },
    priority: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    opened_by: {
        type: String,
        required: true
    },
    discussion: [{ 
        type: String,
        required: false
    }]
});

const Issue = mongoose.model("Issue", IssueSchema);
module.exports = Issue;