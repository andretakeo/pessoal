const https = require('http');
const fs = require('fs');

const port = 3001;

const express = require('express');
const app = express();

const bp = require('body-parser');

const cors = require('cors');
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(cors());

const db = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    user: 'atfujiwara',
    password: '1602176634',
    database: 'takeo_website',
  },
});

app.get('/formacao', (req, res) => {
  db.select('*')
    .from('formacao')
    .then((data) => {
      res.json(data);
    });
});

app.get('/formacao/:id', (req, res) => {
  const { id } = req.params;

  db.select('*')
    .from('formacao')
    .where({
      id: id,
    })
    .then((data) => {
      res.json(data[0]);
    });

  //   if (!found) {
  //     res.status(400).json('not found');
  //   }
});


app.post('/email', (req, res) => {
  const { nome, email, telefone } = req.body;
  db('emails')
    .returning('*')
    .insert({
      nome: nome,
      email: email,
      telefone: telefone,
    })
    .then(console.log);
  res.json(nome, email, telefone);
});

app.put('/formacao/:id', (req, res) => {
  const { id } = req.params;
  const { newTitle, newDescription, newSince, newWhere } = req.body;

  //   db.select('*')
  //     .from('formacao')
  //     .where({
  //       id: id,
  //     })
  //     .then((data) => {
  //       const oldTitle = data[1];
  //       const description = data[2];
  //       const since = data[3];
  //       const where = data[4];
  //     });

  db.where('id', '=', id)
    .update({
      title: newTitle,
      description: newDescription,
      since: newSince,
      where: newWhere,
    })
    .returning('title')
    .then((data) => {
      console.log(data);
    });
});

app.delete('/email', (req, res) => {
  const { nome, email, telefone } = req.body;
  db('emails')
    .insert({
      nome: nome,
      email: email,
      telefone: telefone,
    })
    .then((email) => {
      res.json(email[0]);
    })
    .then((err) => err.status(400).json(err));
  res.json(req.body);
});

/* 
get formacao da db
get sobre da db
register --> POST = nome, email, telefone 

*/

https.createServer(app).listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
