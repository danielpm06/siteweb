function insertDate() {
    var nick = document.getElementById("nick").value;
    var login = document.getElementById("login").value;   
    
    if ( nick == "" ){ 
       return alert('Ingresa el Nick que utilizas en el servidor de argentina limando carter.');
    } elseif login == "" {
       return alert('Ingresa el Login que utilizas en el servidor de argentina limando carter.');
    }
}
