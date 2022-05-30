var name = document.getElementById('name');
var mail = document.getElementById('mail');
var message = document.getElementById('message');

function valida(){

    if(nombre.value.length == 0){
        alert("Por favor escriba su nombre")
        return 0;
    }

    if(mail.value.length == 0){
        alert("Por favor escriba su dirección de correo")
        return 0;
    }

    if(message.value.length == 0){
        alert("Por favor escriba su mensaje")
        return 0;
    }

}