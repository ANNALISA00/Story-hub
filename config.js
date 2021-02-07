import firebase from 'firebase'
 require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyC9wTuLgBK_Caeefqna921Nkxyg8PO96zk",
    authDomain: "story-hub-1.firebaseapp.com",
    projectId: "story-hub-1",
    storageBucket: "story-hub-1.appspot.com",
    messagingSenderId: "882012030413",
    appId: "1:882012030413:web:200344d0dea145e4f73084"
  };

  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig); 
  export default firebase.firestore()