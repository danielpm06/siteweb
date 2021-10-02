
function insertDate() {
    var login = document.getElementById("login").value;
    var pass = document.getElementById("pass").value;   
    
    if ( login == "" ){ 
       return swal("Algo anda mal!", "No puedes dejar esté campo vacio!", "error");
    } 
    if (pass == "") {
       return swal("Algo anda mal!", "No puedes dejar esté campo vacio!", "error");
    } 
    //instanciamos el objetoAjax
    ajax=objetoAjax();
    //uso del medotod POST
    //archivo que realizará la operacion
    //registro.php
    ajax.open("POST", "registro.php",true);
    ajax.onreadystatechange=function() {
        if (ajax.readyState==4) {
        //mostrar resultados en esta capa
        divResultado.innerHTML = ajax.responseText
        //llamar a funcion para limpiar los inputs
        LimpiarCampos();
        }
    }
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //enviando los valores
    ajax.send("logIn="+login+"&Pass="+pass)
}

function LimpiarCampos(){
  document.getElementById("login").value="";
  document.getElementById("pass").value="";
 }
