firebase.initializeApp({
    apiKey: 'AIzaSyCJ1FQVvUkpOmoc1XLd4c3ahlu8IIIG4oU',
    authDomain: 'eva2-f5936.firebaseapp.com',
    projectId: 'eva2-f5936'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function auth() {
    var usuario = document.getElementById("email").value;
    var contrasena = document.getElementById("password").value;

    firebase.auth().sendSignInLinkToEmail(usuario, contrasena)
        .then(function () {

            window.localStorage.setItem('emailForSignIn', usuario);
            console.log("aaaa");
        })
        .catch(function (error) {
            console.log("error en la auf");
        });

}
