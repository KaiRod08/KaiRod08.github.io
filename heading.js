 
  var userName = document.getElementById("username");
  var passWord = document.getElementById("password");
  var login = document.getElementById("login");
  
  passWord.onkeyup = function(){      
    login.onclick = function(){
      
      if(userName.value == "krodgers" && passWord.value == "krodgers2008") {
        
        login.href = "deluxe/userv23gicrGdjdredkG4K4sh36";
        
      } else {
            
        if(userName.value == "admin" && passWord.value == "administrator") {
          
          login.href = "wrwbmniodjqhmvsjergfvxybsdfghdjcgfjwyegysdfrghefgdfgnhudvonisesigjgfjkfxeytbsonwzixkdrubydwgsei.html";
          
        } else {
          
          login.href = "#";
          
        }
      }
    }
  }