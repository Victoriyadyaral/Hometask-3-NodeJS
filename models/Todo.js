const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    content: { type: String, required: true },
    title: { type: String, required: true },
    created: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, ref: 'Category' },
    isArchived: { type: Boolean, default: false },
    dates: {type: Array, default: []}
});

module.exports = model('Todo', schema);