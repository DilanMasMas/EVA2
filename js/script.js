firebase.initializeApp({
    apiKey: 'AIzaSyCJ1FQVvUkpOmoc1XLd4c3ahlu8IIIG4oU',
    authDomain: 'eva2-f5936.firebaseapp.com',
    projectId: 'eva2-f5936'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function agregar() {

    var libro = document.getElementById("libro").value;
    var autor = document.getElementById("autor").value;
    var cantidad = document.getElementById("stock").value;

    console.log("Datos: " + libro + "-" + autor + "-" + cantidad);

    db.collection("libros").add({

        nombre: libro,
        autor: autor,
        cantidad: cantidad
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

    document.getElementById("form-libro").reset();

}




db.collection("libros").onSnapshot(function (querySnapshot) {
    document.getElementById("tablamostrar").innerHTML = '';
    querySnapshot.forEach(function (doc) {
        console.log(doc.id, " => ", doc.data().nombre + doc.data().autor + doc.data().cantidad);
        document.getElementById("tablamostrar").innerHTML += `
            <tr>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().autor}</td>
                <td>${doc.data().cantidad}</td>
                <td><button class="btn red waves-effect waves-light" type="button" onclick="eliminar('${doc.id}')">Eliminar</button></td>
                <td><button class="btn yellow waves-effect waves-light" type="button" onclick="editar('${doc.id}','${doc.data().nombre}','${doc.data().autor}','${doc.data().cantidad}')">Editar</button></td>
              </tr>
            `;
    });
});
function eliminar(id) {

    db.collection("libros").doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

function editar(id, nombre, autor, cantidad) {

    document.getElementById("libro").value = nombre;
    document.getElementById("autor").value = autor;
    document.getElementById("stock").value = cantidad;
    document.getElementById("boton").innerHTML = "Actualizar";

    document.getElementById("boton").onclick = function () {

        var washingtonRef = db.collection("libros").doc(id);
        var libro = document.getElementById("libro").value;
        var autor = document.getElementById("autor").value;
        var cantidad = document.getElementById("stock").value;

        return washingtonRef.update({
            nombre: libro,
            autor: autor,
            cantidad: cantidad
        })
            .then(function () {
                console.log("Document successfully updated!");
                document.getElementById("boton").innerHTML = "Agregar";
                document.getElementById("form-libro").reset();
                document.getElementById("boton").onclick = function () {

                    var libro = document.getElementById("libro").value;
                    var autor = document.getElementById("autor").value;
                    var cantidad = document.getElementById("stock").value;

                    console.log("Datos: " + libro + "-" + autor + "-" + cantidad);

                    db.collection("libros").add({

                        nombre: libro,
                        autor: autor,
                        cantidad: cantidad
                    })
                        .then(function (docRef) {
                            console.log("Document written with ID: ", docRef.id);
                        })
                        .catch(function (error) {
                            console.error("Error adding document: ", error);
                        });

                    document.getElementById("form-libro").reset();

                }

                document.getElementById("form-libro").reset();
            })
            .catch(function (error) {

                console.error("Error updating document: ", error);
            });
    }



}
function cerrar() {
    firebase.auth().signOut()
        .then(function () {
            location.href="../index.html";
            
        })
        .catch(function (error) {
            console.log(error)
        })
}

