const express = require('express');
const mongodb = require('mongodb').MongoClient;
require('dotenv').config();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.ksd1q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

mongodb.connect(url, (err, client) => {
  if (err) {
    console.log(err);
  }
  console.log('Connected to database');

  const db = client.db('test-quotes');
});

app.listen(8080, () => {
  console.log('server open :8080');
});
