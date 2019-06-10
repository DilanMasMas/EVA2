window.onload = "inicializar";
var fautenticar;


function inicializar(){
    fautenticar = document.getElementById("form-aut");
    fautenticar.addEventListener("submit", autentificar, false);

}
function autentificar(event){
    alert("asdljflaksj");
    var usuario = event.target.email.value;
    var contrasena = event.target.password.value;

    
firebase.auth().sendSignInLinkToEmail(usuario, contrasena)
.then(function() {

  window.localStorage.setItem('emailForSignIn', usuario);
  console.log("aaaa");
})
.catch(function(error) {
    console.log("error en la auf");
});
}