import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDIMo1LufVd7Z7w1K5bQal2GQV7Hh5WiUo',
  authDomain: 'expensify-505fd.firebaseapp.com',
  databaseURL: 'https://expensify-505fd.firebaseio.com',
  projectId: 'expensify-505fd',
  storageBucket: 'expensify-505fd.appspot.com',
  messagingSenderId: '516481109878',
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Dmitry',
  age: 27,
  isSingle: false,
  location: {
    city: 'Kharkiv',
    country: 'Ukraine',
  },
}).then(() => {
  console.log('data is saved');
}).catch((error) => {
  console.log('This failed', error);
});

// database.ref().set('This is my data')

database.ref('age').set(28);
database.ref('location/city').set('My city');

database.ref('attributes').set({
  height: 182,
  weight: 80,
});

