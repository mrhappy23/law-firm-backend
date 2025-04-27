const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).send('Message stored successfully');
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;