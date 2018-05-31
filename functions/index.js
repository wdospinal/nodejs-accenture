const functions = require('firebase-functions');
const db = require('./src/firebase/firebase');
const { getUser, postUser } = require('./src/users');

exports.user = functions.https.onRequest((req, res) => {
  switch (req.method) {
    case 'GET':
      console.log(req.query);
      getUser(req, res);
      break;
    case 'POST':
      console.log(req.body);
      postUser(req, res);
      break;
    default:
      console.error(req);
  }
});

