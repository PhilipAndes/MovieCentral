console.log("js ingeladen");

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function showBlock(){
  console.log("showBlock");
  document.getElementById("id01").style.display="block";
}

function goToPage(){
  console.log("goToPage");
  window.location.href = 'logOut.php';
}