import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBVjjXIUt5SZrEs9j8AKdyxBSwFoSWhNG4",
    authDomain: "gardenlog-app.firebaseapp.com",
    databaseURL: "https://gardenlog-app-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "gardenlog-app",
    storageBucket: "gardenlog-app.appspot.com",
    messagingSenderId: "511751385908",
    appId: "1:511751385908:web:c5c8cb53bf6aa3b27c6b61",
    measurementId: "G-ZNPZNBX554",
    storageBucket: "gs://gardenlog-app.appspot.com"
})

export const auth = app.auth()
export default app;