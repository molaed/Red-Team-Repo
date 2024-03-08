// uploadJsonToFirestore.js
const admin = require('firebase-admin');
const serviceAccount = require('../secrets/surge-events-firebase-adminsdk-jbczj-68bcd9134e.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const data = require('./output.json'); // The JSON file you generated

async function uploadData() {
  const collectionRef = db.collection('clubs'); // Replace 'yourCollection' with your Firestore collection name
  const batch = db.batch();

  data.forEach((item, index) => {
    const docRef = collectionRef.doc(); // Automatically generate unique document IDs
    batch.set(docRef, item);
  });

  await batch.commit();
  console.log('Data successfully uploaded to Firestore!');
}

uploadData().catch(console.error);
