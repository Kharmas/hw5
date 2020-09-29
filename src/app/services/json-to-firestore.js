const firebaseConfig = {
  apiKey: "AIzaSyBmnumo4Xet7gNau5-Hab9yxdPvdl1WN9o",
  authDomain: "homew5-14841.firebaseapp.com",
  databaseURL: "https://homew5-14841.firebaseio.com",
  projectId: "homew5-14841",
  storageBucket: "homew5-14841.appspot.com",
  messagingSenderId: "989290326481",
  appId: "1:989290326481:web:ab0dfbc393c1a98ed5d8f0"
};
const albums = require('./albums.json');
const firebase = require('firebase');

require('firebase/firestore');
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

albums.forEach(function (obj) {
  db.collection("albums")
    .add({
      name: obj.name,
      band: obj.band,
      genre: obj.genre,
      label: obj.label,
      producer: obj.producer,
      releaseDate: new Date(obj.releaseDate)
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
