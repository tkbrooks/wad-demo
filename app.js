const express = require('express');
const path = require('path');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/impulses/:impulse', (req, res, next) => {
  const { impulse } = req.params;
  console.log(impulse);
  res.sendFile(path.join(__dirname, 'public', 'impulses', impulse));
});

app.get('/sounds/:sound', (req, res, next) => {
  const { sound } = req.params;
  console.log('sound name', sound);
  res.sendFile(path.join(__dirname, 'public', 'sounds', sound));
});

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
