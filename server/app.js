const express = require('express');
const path = require('path');
const volleyball = require('volleyball');

const app = express();
const PORT = 8080;

app.use(volleyball);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
