$(document).ready(function() {
    $("#do_login").click(function() { 
       closeLoginInfo();
       $(this).parent().find('span').css("display","none");
       $(this).parent().find('span').removeClass("i-save");
       $(this).parent().find('span').removeClass("i-warning");
       $(this).parent().find('span').removeClass("i-close");
       
        var proceed = true;
        $("#login_form input").each(function(){
            
            if(!$.trim($(this).val())){
                $(this).parent().find('span').addClass("i-warning");
            	$(this).parent().find('span').css("display","block");  
                proceed = false;
            }
        });
       
        if(proceed) //everything looks good! proceed...
        {
            $(this).parent().find('span').addClass("i-save");
            $(this).parent().find('span').css("display","block");
        }
    });
    
    //reset previously results and hide all message on .keyup()
    $("#login_form input").keyup(function() { 
        $(this).parent().find('span').css("display","none");
    });
 
  openLoginInfo();
  setTimeout(closeLoginInfo, 1000);
});

function openLoginInfo() {
    $(document).ready(function(){ 
    	$('.b-form').css("opacity","0.01");
      $('.box-form').css("left","-37%");
      $('.box-info').css("right","-37%");
    });
}

function closeLoginInfo() {
    $(document).ready(function(){ 
    	$('.b-form').css("opacity","1");
    	$('.box-form').css("left","0px");
      $('.box-info').css("right","-5px"); 
    });
}

$(window).on('resize', function(){
      closeLoginInfo();
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
