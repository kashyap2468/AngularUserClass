var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var User = new Schema({
    username: {type: String, trim: true},
    useremail: {type: String, trim: true},
    lastlgin: {type: Date, default: Date.now()}
}, {
    collection: 'User'
});

module.exports = mongoose.model('User', User);