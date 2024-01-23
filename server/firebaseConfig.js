const admin = require('firebase-admin');
const serviceAccount = require('./secrets/surge-events-firebase-adminsdk-jbczj-68bcd9134e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = db;