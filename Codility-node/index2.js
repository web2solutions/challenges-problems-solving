'use strict';

const lodash = require('lodash');
const uuidv4 = require('uuid/v4');

const express = require('express');

const app = express();
app.use(express.json());

// Your code starts here.
// Placeholders for all requests are provided for your convenience.

app.post('/api/user', (req, res) => {
  // ...
  // req.body.id
  // { id: 'jon', name: 'Jon Snow', skills: [] }

  candidates.add(req.body.id, req.body)
  res.status(201).send(req.body);
});

app.post('/api/authenticate', (req, res) => {
  // ...
});

app.post('/api/logout', (req, res) => {
  // ...
});

app.post('/api/articles', (req, res) => {
  // ...
});

app.get('/api/articles', (req, res) => {
  // ...
});

exports.default = app.listen(process.env.HTTP_PORT || 3000);
