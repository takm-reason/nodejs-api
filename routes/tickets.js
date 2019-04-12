const express = require('express');
const router = express.Router();

const tickets = () => {
  return require('../models/tickets');
};

router.get('/', (req, res, next) => {
  tickets().getTickets((err, results) => {
    if (err) {
      res.status(403).json(err)
    } else {
      res.status(200).json(results)
    }
  })
});

router.get('/:id', (req, res, next) => {
  tickets().getTicket(req.params.id, (err, results) => {
    if (err) {
      res.status(403).json(err)
    } else {
      res.status(200).json(results)
    }
  })
});

router.post('/', (req, res, next) => {
  tickets().postTicket(req.body, (err, results) => {
    if (err) {
      res.status(403).json(err)
    } else {
      res.status(200).json(results)
    }
  })
});

module.exports = router;
