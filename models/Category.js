const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    todos: [{ type: Object, ref: 'Todo' }]
});

module.exports = model('Category', schema);