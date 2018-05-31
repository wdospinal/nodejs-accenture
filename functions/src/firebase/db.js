const { db } = require('./firebase');

const doCreate = (path, object) =>
  db.ref(`${path}${object.dni}`).set(object);

const doGetOne = (path, dni, callback) =>
  db.ref(`${path}${dni}`).once('value', callback);

const doGet = (path, limit, callback) =>
  db.ref(path).limitToFirst(limit).on('value', callback);

module.exports = {
  doCreate, doGetOne, doGet,
};
