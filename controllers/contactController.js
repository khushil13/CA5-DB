const Contact = require('../models/Contact');

const addContact = async (req, res) => {
  try {
    const { name, phone, email, userId } = req.body;
    const contact = new Contact({ name, phone, email, userId });
    await contact.save();
    res.status(201).json({ message: 'Contact added successfully', contact });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addContact };
