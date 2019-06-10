window.onload = inicializar;
var formlibro;
var reflibro;
firebase.initializeApp({
    apiKey: 'AIzaSyCJ1FQVvUkpOmoc1XLd4c3ahlu8IIIG4oU',
    authDomain: 'eva2-f5936.firebaseapp.com',
    projectId: 'eva2-f5936'
  });
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();

function inicializar() {
    formlibro = document.getElementById("form-libro");
    formlibro.addEventListener("submit", basedd, false);

    
}
function basedd() {
    var libro= document.getElementById("libro").value;
    var autor= document.getElementById("autor").value;
    var cantidad= document.getElementById("stock").value;

    db.collection("libros").add({
        nombre: libro,
        autor: autor,
        cantidad: cantidad
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}