const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    category: { type: String, required: true },
    todos: [{ type: Object, ref: 'Todo' }]
});

module.exports = model('Category', schema);