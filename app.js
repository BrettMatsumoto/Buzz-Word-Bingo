const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const buzzwords = require('./routes/buzzwords.js');
const PORT = 3000;
let score = 0;

app.use(express.static('public'));

app.use('/buzzwords', buzzwords);

app.use('/reset', reset);

app.use('/heard', heard);

app.get('/', (req, res) => {
  res.send('Hello World');
});

const server = app.listen(PORT, () => {
  console.log(`Express is running at port ${PORT}.`);
});
