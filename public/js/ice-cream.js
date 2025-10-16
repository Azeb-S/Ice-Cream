//alert("hello, Ice cream")

document.getElementById('ice-cream').onsubmit = () => {
 let isValid = true
 let name = document.getElementById('name').value.trim()
 if (!name) {
  document.getElementById('err-name').style.display = "block"
  isValid = false
 }

 let email = document.getElementById('email').value.trim()
 if (!email) {
  document.getElementById('err-email').style.display = "block"
  isValid = false
 }

 return isValid

}