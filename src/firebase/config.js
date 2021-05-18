(function(){
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyBVjjXIUt5SZrEs9j8AKdyxBSwFoSWhNG4",
        authDomain: "gardenlog-app.firebaseapp.com",
        projectId: "gardenlog-app",
        storageBucket: "gardenlog-app.appspot.com",
        messagingSenderId: "511751385908",
        appId: "1:511751385908:web:c5c8cb53bf6aa3b27c6b61",
        measurementId: "G-ZNPZNBX554"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // // FIREBASE DATABASE
    // // get elements
    // const preObject = document.getElementById("object");
    // // create reference
    // const dbRefObject = firebase.database().ref().child("object");
    // // sync object changes; will be called every time there is a change on this location in the database
    // dbRefObject.on('value')


})
