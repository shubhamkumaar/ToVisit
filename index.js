function buttonAnnimation(press){
    var buttonPressed = document.querySelector("."+press);
    buttonPressed.classList.add("pressed");
 
    setTimeout(function(){
      buttonPressed.classList.remove("pressed")
    },90);
 }
