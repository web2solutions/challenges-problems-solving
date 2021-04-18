'use strict';

const lodash = require('lodash');
const { uuid } = require('uuidv4');
const  uuidv4 = uuid

const express = require('express');

const app = express();
app.use(express.json());

// Your code starts here.
// Placeholders for all requests are provided for your convenience.

const users = new Map()
const articles = new Map()

// Your code starts here.
// Placeholders for all requests are provided for your convenience.

app.post('/api/user', (req, res) => {
  if (!req.body) {
    res.sendStatus(400)
  } else {
    if (Object.keys(req.body).length === 0) {
      return res.sendStatus(400)
    }
    users.set(req.body.user_id, req.body)
    console.log(users)
    res.status(201).json(req.body); 
  }
});

app.post('/api/authenticate', (req, res) => {
  if (!req.body) {
    res.sendStatus(400)
  } else {
    if (Object.keys(req.body).length === 0) {
      return res.sendStatus(400)
    }
    const login = req.body.login
    const password = req.body.password
    let found = false
    for (var [id, user] of users) {
      console.log(user)
      if (user.login === login) {
        found = user
        break
      }
    }
    if (!found) {
      return res.sendStatus(404)
    }
    if (found.password !== password) {
      return res.sendStatus(401)
    }
    const token = uuidv4()
    users.set(found.user_id, {...found, token })

    res.status(200).json({ token });
  }
  
});

app.post('/api/logout', (req, res) => {
  // ...
  const headers = req.headers
  if (!headers['authentication-header']) {
    return res.sendStatus(401)
  }
  const token = headers['authentication-header']
  let found = false
  for (var [id, user] of users) {
      console.log(user)
      if (user.token === token) {
        found = user
        break
      }
  }
  if (!found) {
    return res.sendStatus(401)
  }
  delete found.token
  users.set(found.user_id, found)
  return res.sendStatus(200)
});

app.post('/api/articles', (req, res) => {
  const headers = req.headers
  
  if (!headers['authentication-header']) {
    return res.sendStatus(401)
  }
  const token = headers['authentication-header']
  let found = false
  for (var [id, user] of users) {
      console.log(user)
      if (user.token === token) {
        found = user
        break
      }
  }
  if (!found) {
    return res.sendStatus(401)
  }

  if (!req.body) {
    res.sendStatus(400)
  } else {
    if (Object.keys(req.body).length === 0) {
      return res.sendStatus(400)
    }

    articles.set(req.body.article_id, {...req.body, user_id: found.user_id })

    res.status(201).json(req.body);
  }
});

app.get('/api/articles', (req, res) => {
  const arts = []
  for (var [id, content] of articles) {
    arts.push(content)
  }
  const headers = req.headers
  if (!headers['authentication-header']) {
    return res.sendStatus(401)
  }
  const token = headers['authentication-header']
  let found = false
  for (var [id, user] of users) {
      console.log(user)
      if (user.token === token) {
        found = user
        break
      }
  }
  if (!found) {
    return res.status(200).json(arts.filter(a => (a.visibility === 'public')));
  }
  const ret = [...arts.filter(a => (a.visibility === 'logged_in')), ...arts.filter(a => (a.visibility === 'public'))]

  return res.status(200).json(ret.map(a => {
    delete a.visibility
    delete a.user_id
    return a
  }));
  // get list 
  

});

exports.default = app.listen(400);
