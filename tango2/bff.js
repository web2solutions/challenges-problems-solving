// dulce@tango.io
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;
const mock = [0, 1, 1];
const cache = new Map();

app.use(cors());

app.get('/api/:number', function (req, res) {
  const n = +req.params.number;
  // memo
  if (cache.get(n)) {
    return res.json(cache.get(n));
  }
  const position = n - 1;
  if (position > 2) {
    mock.push(mock[position - 2] + mock[position - 1]);
  }
  const f = {
    f: mock[position]
  };
  cache.set(n, f);
  res.json(f);
})

app.use(express.static(__dirname + '/build'));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '/build/index.html'));
});

app.listen(port);