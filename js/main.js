signing.addEventListener("click", (e) => {
  e.preventDefault();
  signModal.classList.add("openSignModal");
  signModalBody.classList.add("openSignBody");
});

closeBtnModal.addEventListener("mouseup", (e) => {
  e.preventDefault();
  signModal.classList.remove("openSignModal");
  signModalBody.classList.remove("openSignBody");
});




// Kataloggggg


var openModalBtn = document.getElementById("openModalBtn");

var modal = document.getElementById("catalogModal");

var closeBtn = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
  modal.style.display = "block";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

