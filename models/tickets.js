'use strict';

const config = require('config');
const mysql = require('mysql').createPool(config.mysql);

const getTickets = (cb) => {
  const sql = 'SELECT * FROM tickets WHERE deleted = 0'
  mysql.query(sql, (err, results) => {
    if (err){
      return cb(err, null)
    }
    if (results.length == 0){
      return cb(true, null)
    }
    return cb(null, results)
  })
}

module.exports = {
  getTickets,
};