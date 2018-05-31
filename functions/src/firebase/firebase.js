const functions = require('firebase-functions');
const admin = require('firebase-admin');

const { firebase } = functions.config();
const serviceAccount = require('./futbolero-apis-firebase-adminsdk-hhf46-51e73b3c6c.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: firebase.databaseURL,
});

const db = admin.database();

module.exports = {
  db,
};
