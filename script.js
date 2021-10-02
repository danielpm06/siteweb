var current = null;
document.querySelector('#email').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#password').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});
document.querySelector('#submit').addEventListener('focus', function(e) {
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
});

function insertDate() {
    var nick = document.getElementById("login").value;
    var login = document.getElementById("pass").value;   
    
    if ( nick == "" ){ 
       return
    } 
    if (login == "") {
       return
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
