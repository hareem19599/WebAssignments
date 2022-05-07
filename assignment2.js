var name = document.getElementById("name")
var email = document.getElementById("email")
var phone = document.getElementById("phone")
var message = document.getElementById("msg")
var enter = document.getElementById("register")
var reset = document.getElementById("reset")

enter.addEventListener("click", function () {
    if (phone.value.length > 11) {
        phone.setCustomValidity("phone number should not be greater than 10 digits")
    }
    else if (email.value === '') {
        email.setCustomValidity("Invalid E-mail address!");
    }
    else if (message.value.length > 0) {
        alert("Feedback sent!!\nThanks for your feedback!!\n\nHave a nice day!!")
    }
})
//color change js

function colorchangerajah() {
    document.body.style.backgroundColor = "#f6bd60";
}
function colorchangefroly() {
    document.body.style.backgroundColor = "#f28482";
}
function colorchangeziggurat() {
    document.body.style.backgroundColor  = "#b3dbd8";
}
function colorchangesorrell() {
    document.body.style.backgroundColor = "#c8b88a";
}
function colorchangelavender() {
    document.body.style.backgroundColor  = "#c892e3";
}
function original() {
    document.body.style.backgroundColor  = "#f0f0f0";
}

//feedback sent
var eemail = document.getElementById("mail").pattern;
var msg = document.getElementById("message");
function send() {
    if(eemail.value.length > 0 && msg.value.length > 0)
    { 
        alert("Message successfully sent!!")
    }
    else if(eemail.value == "") {
       alert("Invalid E-mail address!");
    }
    else if(msg.value === '') {
       alert("message must be filled out!");
    }
        
    else{
        alert("Please enter something!")
    }
    eemail.value = "";
  msg.value = "";
}