

//********************Collecting user input **********************

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires /*+ ";path=/"*/;
}

function getCookie(cname) {

  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');

  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let user = getCookie("username");

function checkCookie() {
  
  
  if (user != "") {

    alert("Welcome again " + user);
    
  } else {

    if(confirm("You have to sign up first in order to take a quiz.")){
      document.location.replace("/loginform.html");

    } else {

      document.location.replace("/Home.html");
    }
  }
}


//*******************Using the user input to update leader board*****************
