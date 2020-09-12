import firebase from 'firebase';

  const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyDA0yAoD29YsADKdLG3lfw4V9gzy5b2eNk",
    authDomain: "todoapp-8229e.firebaseapp.com",
    databaseURL: "https://todoapp-8229e.firebaseio.com",
    projectId: "todoapp-8229e",
    storageBucket: "todoapp-8229e.appspot.com",
    messagingSenderId: "1097863595007",
    appId: "1:1097863595007:web:f1b0715269da91762a1dca"
  });

  const db = firebaseapp.firestore();

  export default db;


// import firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyDA0yAoD29YsADKdLG3lfw4V9gzy5b2eNk",
//     authDomain: "todoapp-8229e.firebaseapp.com",
//     databaseURL: "https://todoapp-8229e.firebaseio.com",
//     projectId: "todoapp-8229e",
//     storageBucket: "todoapp-8229e.appspot.com",
//     messagingSenderId: "1097863595007",
//     appId: "1:1097863595007:web:f1b0715269da91762a1dca"
//   };
 // firebase.initializeApp(firebaseConfig);

// export default firebase;