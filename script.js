
function insertDate() {
    var nick = document.getElementById("login").value;
    var login = document.getElementById("pass").value;   
    
    if ( nick == "" ){ 
       return swal("Algo anda mal!", "No puedes dejar esté campo vacio!", "error");
    } 
    if (login == "") {
       return swal("Algo anda mal!", "No puedes dejar esté campo vacio!", "error");
    } 
}
