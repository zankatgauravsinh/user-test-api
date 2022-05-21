const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{ type: String, required: true },
    phone:{ type: Number, required: true },
    email: { type: String, unique: true, required: true },
    address: { type: String, required: false },
    createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);