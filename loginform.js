const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', ()=> container.classList.add('right-panel-active')
);
signInButton.addEventListener('click', ()=> container.classList.remove('right-panel-active')
);

/*const names = [];
const emails = [];

function signUp(){
    const name = document.forms["signupform"]["name"].value;
    const email = document.forms["signupform"]["email"].value;
    names.push(name);
    emails.push(email);
    alert("works");

}

function validate(){
    const name = document.forms["signupform"]["name"].value;
    const email = document.forms["signupform"]["email"].value;

    for(i = 0; i < emails.length; i++){
        if(email != emails[i]){
            alert("You are not signed in!");
        }
    }
}*/

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
  
  function checkCookie() {
    let user = getCookie("username");
    
    if (user != "") {
      alert("Welcome again " + user);
      
    } else {
      
       user = document.getElementById('name').value;
       
       if (user != "" && user != null){
        setCookie("username", user, 365);
        alert("Nice to meet you, " + user);

      }else{
        alert("Please enter your name in the signup form.");

       }
    }
  }

  