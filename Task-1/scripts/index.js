class ObjCreator {
  constructor(e, n, c) {
    (this.email = e), (this.number = n), (this.code = c.s.dialCode);
  }
}

const numElement = document.getElementById("number");
const code = window.intlTelInput(numElement, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

setUserData = (event) => {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (email == "") {
    document.getElementById("emailError").innerHTML = "*Required field";
  } else if (number == "") {
    document.getElementById("numberError").innerHTML = "*Required field";
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerHTML =
      "You have entered an invalid email address";
  } else if (number.length != 10) {
    document.getElementById("numberError").innerHTML =
      "You have entered an invalid Mobile number";
  } else {
    let userObj = new ObjCreator(email, number, code);
    localStorage.setItem("userObj", JSON.stringify(userObj));
    window.location.href = "./thankYou.html";
  }
};

const validateNumber = () => {
  document.getElementById("numberError").innerHTML = "";
};
const validateEmail = () => {
  document.getElementById("emailError").innerHTML = "";
};
