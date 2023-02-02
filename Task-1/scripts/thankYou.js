let data = JSON.parse(localStorage.getItem("userObj")) || null;

document.getElementById("email").innerText = data.email
document.getElementById("number").innerText = data.number