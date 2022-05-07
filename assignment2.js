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
    if (email.value === '') {
        email.setCustomValidity("Invalid E-mail address!");
    }
    if (message.value.length > 0) {
        alert("Feedback sent!!\nThanks for your feedback!!\n\nHave a nice day!!")
    }
})