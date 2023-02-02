class ObjCreator {
  constructor(e, n) {
    (this.email = e), (this.number = n);
  }
}

setUserData = () => {
  window.href = "https://placements.masaischool.com/placements"
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;

  let userObj = new ObjCreator(email, number);
  localStorage.setItem("userObj", JSON.stringify(userObj));
};
