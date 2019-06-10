function validar(){
    var usuario = document.getElementById("user").value;
    var pass = document.getElementById("password").value;

    if (usuario=="dilan" && pass=="1234") {
        alert("Bienvenido admin!")
        location.href = "../paginas/admin.html";

    } else {
        alert("Usuario o Contraseña incorrecto");
        
    }
    
}