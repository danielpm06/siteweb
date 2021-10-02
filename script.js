
function insertDate() {
    var nick = document.getElementById("login").value;
    var login = document.getElementById("pass").value;   
    
    if ( nick == "" ){ 
       return
    } 
    if (login == "") {
       return
    }
    swal("Oops!", "Something went wrong on the page!", "error");
    
}
