firebase.initializeApp({
    apiKey: 'AIzaSyCJ1FQVvUkpOmoc1XLd4c3ahlu8IIIG4oU',
    authDomain: 'eva2-f5936.firebaseapp.com',
    projectId: 'eva2-f5936'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function ingresar() {
    var email1 = document.getElementById('email1').value;
    var password1 = document.getElementById('password1').value;
  
    firebase.auth().signInWithEmailAndPassword(email1, password1).catch(function (error) {
        
        
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
    }); email1 - password1.html

}
//verificar la autenticacion
