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

  // When the user clicks on cancel button, close the modal
  cancel.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
