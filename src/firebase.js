import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyBVjjXIUt5SZrEs9j8AKdyxBSwFoSWhNG4",
    authDomain: "gardenlog-app.firebaseapp.com",
    projectId: "gardenlog-app",
    storageBucket: "gardenlog-app.appspot.com",
    messagingSenderId: "511751385908",
    appId: "1:511751385908:web:c5c8cb53bf6aa3b27c6b61",
    measurementId: "G-ZNPZNBX554",
    storageBucket: "gs://gardenlog-app.appspot.com"
})

export const auth = app.auth()
export default app;



// service firebase.storage {
//     match /b/{bucket}/o {
//       match /{allPaths=**} {
//         allow read, write: if request.auth != null;
//       }
//     }
//   }