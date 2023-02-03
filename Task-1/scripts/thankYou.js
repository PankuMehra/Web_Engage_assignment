let data = JSON.parse(localStorage.getItem("userObj")) || null;
console.log('data:', data)

document.getElementById("email").innerText = data.email
document.getElementById("country-code").innerText += data.code
document.getElementById("number").innerText = data.number