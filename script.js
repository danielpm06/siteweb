function insertDate() {
    var nick = document.getElementById("login").value;
    var login = document.getElementById("pass").value;   
    
    if ( nick == "" ){ 
       return alert('Ingresa el Nick que utilizas en el servidor de argentina limando carter.');
    } 
    if (login == "") {
       return alert('Ingresa el Login que utilizas en el servidor de argentina limando carter.');
    }
    
    var mysql  = require('mysql');
    var connection = mysql.createConnection({
        host     : 'na2.ultra-h.com',
        user     : 'server_6846',
        password : '12345',
        port: '3306',
        database: 'server_6846_players',
        useConnectionPooling:true
    });
    
    connection.connect((err) => {
      if (err) {
        console.log("Database Connection Failed !!!", err);
      } else {
        console.log("connected to Database");
      }
    });
  
    
    client.query({
      name: 'insert beatle',
      text: "INSERT INTO players (USER,LOGIN,DAYS) values($1, $2, $3)",
      values: [nick, login, 30]
    });

    
}
