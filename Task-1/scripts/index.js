class ObjCreator {
    constructor(e, n) {
        (this.email = e), (this.number = n);
    }
}

setUserData = () => {
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;

  let userObj = new ObjCreator(email, number);
  localStorage.setItem("userObj", JSON.stringify(userArray));
};
document.getElementById("sign_up").addEventListener("click", setUserData);
