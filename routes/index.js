var express = require('express');
var router = express.Router();

const tickets = () => {
  return require('../models/tickets');
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tickets', function(req, res, next) {
  tickets().getTickets((err, results) => {
    if (err) {
      res.status(403).json(err)
    } else {
      res.status(200).json(results)
    }
  })
});

router.get('/tickets/:id', function(req, res, next) {
  tickets().getTicket(req.params.id, (err, results) => {
    if (err) {
      res.status(403).json(err)
    } else {
      res.status(200).json(results)
    }
  })
});

module.exports = router;
