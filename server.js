const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

const uri = 'mongodb+srv://sweetysarasunny:4JJZjLr6dqzoP16l@cluster0.zvr9sai.mongodb.net/whiteline?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const contactSchema = new mongoose.Schema({
  name: String,
  companyName: String,
  email: String,
  phone: String,
  date: String,
  time: String
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', (req, res) => {
  const contact = new Contact(req.body);
  contact.save()
    .then(result => {
      res.status(201).json(result);
    })
    .catch(error => {
      res.status(400).json({ error: error.message });
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
