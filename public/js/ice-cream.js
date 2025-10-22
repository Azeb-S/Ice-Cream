//alert("hello, Ice cream")

/**
 * 
 Ensure that name is not empty
 Check that email is not empty, and contains an "@" symbol
 Ensure that a flavor is selected
 Make sure that a cone is selected
 */


document.getElementById('ice-cream').onsubmit = () => {

 clearErrors()
 let isValid = true

 //Ensure that name is not empty

 let name = document.getElementById('name').value.trim()
 if (!name) {
  document.getElementById('err-name').style.display = "block"
  isValid = false
 }
 //Check that email is not empty, and contains an "@" symbol

 let email = document.getElementById('email').value.trim()
 if (!email || email.indexOf("@") === -1) {
  document.getElementById('err-email').style.display = "block"
  isValid = false
 }

 //Ensure that a flavor is selected
 let flavor = document.getElementById('flavor').value
 if (flavor === "none") {
  document.getElementById('err-flavor').style.display = "block"
  isValid = false
 }

 //Make sure that a cone is selected
 let coneButtons = document.getElementsByName("method")
 let count = 0
 for (let i = 0; i < coneButtons.length; i++) {
  if (coneButtons[i].checked) {
   count++
  }
 }
 if (count === 0) {
  document.getElementById("err-cone").style.display = "block"
  isValid = false
 }

 // validation for topping 

 let topping = document.getElementsByName("toppings[]")

 let toppingcount = 0
 for (let i = 0; i < topping.length; i++) {
  if (topping[i].checked) {
   toppingcount++
  }
 }
 if (toppingcount === 0) {
  document.getElementById("err-topping").style.display = "block"
  isValid = false
 }




 return isValid

}

function clearErrors() {
 let errors = document.getElementsByClassName("error")
 for (let i = 0; i < errors.length; i++) {
  errors[i].style.display = "none"
 }

}