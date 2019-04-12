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

const getTicket = (id, cb) => {
  const sql = 'SELECT * FROM tickets WHERE deleted = 0 AND id = ?'
  mysql.query(sql, id, (err, results) => {
    if (err){
      return cb(err, null)
    }
    return cb(null, results)
  })
}

const postTicket = (values, cb) => {
  const sql = 'INSERT INTO tickets SET ?'
  mysql.query(sql, values, (err, results) => {
    if (err){
      return cb(err, null)
    }
    return cb(null, results)
  })
}

const putTicket = (id, values, cb) => {
  const sql = 'UPDATE tickets SET ? WHERE id = ?'
  mysql.query(sql, [values, id], (err, results) => {
    if (err){
      return cb(err, null)
    }
    return cb(null, results)
  })
}

const deleteTicket = (id, cb) => {
  const sql = 'UPDATE tickets SET deleted = 1 WHERE id = ?'
  mysql.query(sql, id, (err, results) => {
    if (err){
      return cb(err, null)
    }
    return cb(null, results)
  })
}

module.exports = {
  getTickets,
  getTicket,
  postTicket,
  putTicket,
  deleteTicket
};