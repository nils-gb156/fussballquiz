const express = require('express');
const playerRouter = require('./routes/api/player');
const indexRouter = require('./routes/index');
const app = express();

// Statische Dateien servieren
app.use(express.static('public'));

// JSON Parser für API requests
app.use(express.json());

// Routen
app.use('/', indexRouter);
app.use('/', playerRouter);

app.use((req, res, next) => {
  res.status(404).send('Seite nicht gefunden');
});

module.exports = app;