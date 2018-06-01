const { db } = require('../firebase');
const { PATH_USER } = require('../helpers/constants');
const { respondWithResult, respondWithError } = require('../helpers/response');

// Get User dni
const getUserDni = (dni, res) =>
  db.doGetOne(PATH_USER, dni, respondWithResult(res, 200));

// Get User limit 10
const getAllUser = (limit, res) =>
  db.doGet(PATH_USER, parseInt(limit, 10), respondWithResult(res, 200));

// If dni or not dni
const getUser = (req, res) => {
  const { dni, limit = 10 } = req.query;
  if (dni) {
    getUserDni(dni, res);
  } else {
    getAllUser(limit, res);
  }
};

const postUser = (req, res) => {
  db.doGetOne(PATH_USER, req.body.dni, (result) => {
    const user = result.val();
    if (user) {
      return respondWithError(res, 500)(5);
    }
    return db.doCreate(PATH_USER, req.body)
      .then((solution) => {
        console.log('El envio fue correcto!', solution);
        respondWithResult(res, 200)(solution);
      })
      .catch((error) => {
        respondWithError(res, 500)(error);
      });
  });
};

module.exports = {
  getUser, postUser,
};

