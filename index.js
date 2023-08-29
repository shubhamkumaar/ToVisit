function buttonAnimation(btn) {

  var activeButton = document.querySelector("." + btn);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
 