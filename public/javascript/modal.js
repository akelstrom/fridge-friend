// Get the modal
var modal = document.getElementById("modal");
if (modal) {
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Cancel button to close the modal
  var cancel = document.getElementById("close");

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

// Subtract inventory item qty
var minus = document.getElementById("minusBtn");

// Add inventory item qty
var plus = document.getElementById("plusBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  /* const errorToast = document.querySelector('#alert-toast');
  errorToast.classList.add('hidden'); */
} 
  // When the user clicks on cancel button, close the modal
  cancel.onclick = function () {
    modal.style.display = "none";
    const errorToast = document.querySelector('#alert-toast');
  errorToast.classList.add('hidden');
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// When the user clicks on the button it subtracts qty 
minus.onclick = function() {
  this.parentNode.querySelector('input[type=number]').stepDown()
} 

// When the user clicks on the button it adds qty 
plus.onclick = function() {
  this.parentNode.querySelector('input[type=number]').stepUp()
} 

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }
today = yyyy + '-' + mm + '-' + dd;
document.getElementById('expDate').setAttribute('min', today);