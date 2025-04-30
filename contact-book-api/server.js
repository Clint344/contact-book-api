const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'contact_book'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to the database!');
});

// API route to get all contacts
app.get('/contacts', (req, res) => {
  db.query('SELECT * FROM contacts', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// API route to add a new contact
app.post('/contacts', (req, res) => {
  const newContact = req.body;
  db.query('INSERT INTO contacts SET ?', newContact, (err, results) => {
    if (err) throw err;
    res.json({ id: results.insertId, ...newContact });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
