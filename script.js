const share = document.querySelector("#share");

share.addEventListener("click", () => {
  const shareMenu = document.querySelector(".share-menu");
  shareMenu.classList.toggle("show");
  console.log("clicked");
});
