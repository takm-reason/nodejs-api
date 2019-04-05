var express = require('express');
var router = express.Router();

const tickets = () => {
  return require('../models/tickets');
};

/* GET home page. */
router.get('/', function(req, res, next) {
  tickets().getTickets((err, results) => {
    if (err) {
      return res.render('index', {
        title: 'Express',
        results: ['no tickets']
      })
    } else {
      return res.render('index', {
        title: 'Express',
        tickets: results
      });
    }
  })
});

module.exports = router;
