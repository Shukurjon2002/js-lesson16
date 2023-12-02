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
