// NOTE
// Please use your own firebase details below. For more details visit: https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/development/firebaseIntegration.html


import firebase from 'firebase/app'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCyzS1XiHqaP2LPaC_sg_IxJrXJH1WoCUQ",
  authDomain: "gentax-6e0ab.firebaseapp.com",
  databaseURL: "https://gentax-6e0ab.firebaseio.com",
  projectId: "gentax-6e0ab",
  storageBucket: "gentax-6e0ab.appspot.com",
  messagingSenderId: "874305030395",
  appId: "1:874305030395:web:0e7dd337ef5cdee080085e",
  measurementId: "G-FDJRJ68LK5"
};
firebase.initializeApp(config)
