const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = mongoose.model('Contact', contactSchema);
