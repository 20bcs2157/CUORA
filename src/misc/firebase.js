import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyC80lWcjBOYYrx4D_u2PAhpYxen5XznHIU',
  authDomain: 'chat-web-app-ca650.firebaseapp.com',
  databaseURL: 'https://chat-web-app-ca650-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-ca650',
  storageBucket: 'chat-web-app-ca650.appspot.com',
  messagingSenderId: '475905125843',
  appId: '1:475905125843:web:14fcaff2ee42c606d21326',
};

const app = firebase.initializeApp(config);
