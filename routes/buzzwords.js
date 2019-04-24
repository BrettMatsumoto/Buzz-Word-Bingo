const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });

let buzzwords = [];

router
  .route('/')
  .get((req, res) => {
    res.send(`${JSON.stringify(buzzwords)}`);
  })
  .post(urlEncodedParser, (req, res) => {
    if (req.body && buzzwords.length < 5) {
      buzzwords.push(req.body);
      res.send({ success: true });
    } else {
      res.send({ success: false });
    }
  })
  .put(urlEncodedParser, (req, res) => {
    console.log(req.body.points)
    for (let i = 0; i < buzzwords.length; i++) {
      if (buzzwords[i].buzzword === req.body.buzzword) {
        buzzwords[i].points = req.body.points;
        res.send({ success: true });
      } else {
        res.send({ success: false });
      }
    }
  })
  .delete((req, res) => {
    res.send({ success: true });
  });

module.exports = router;
