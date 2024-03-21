function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and description elements in the modal
var modalImg = document.getElementById("modal-image");
var modalDescription = document.getElementById("modal-description");

// Function to open the modal with image and description
function openModal(imageSrc, description) {
  modal.style.display = "block";
  modalImg.src = imageSrc;
  modalDescription.innerHTML = description;
}

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
