// const db = require('./db')

// register models
require('./models')

const admin = require('firebase-admin')
const serviceAccount = require('../../secrets/superintendo-admin.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://superintendo-a892c.firebaseio.com'
})
let db = admin.firestore()
module.exports = db
// (async function () {
//   try {

//     const snapshot = await db.collection('buildings').get()
//     console.log(snapshot);

//     snapshot.forEach(async (doc) => {
//       const data = doc.data();
//       console.log(doc.id, '=>', data);
//       const apartments = await db.collection(`buildings/${doc.id}/apartments`).get();
//       apartments.forEach(apartment => {
//         // console.log(doc.id, '=>', data);
//         console.log(apartment.id, '=>', apartment.data())

//       })
//       // console.log(apartments)
//     });

//   }
//   catch (err) {
//     console.log('Error getting documents', err);
//   };
// })();
