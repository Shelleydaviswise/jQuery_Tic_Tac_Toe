 
var counter = 0;
var $red = "rgb(255, 0, 0)"
var $blue = "rgb(0, 0, 255)"

var $one =  $("#one");
var $two =  $("#two");
var $three =  $("#three");
var $four =  $("#four");
var $five =  $("#five");
var $six =  $("#six");
var $seven =  $("#seven");
var $eight =  $("#eight");
var $nine =  $("#nine");

function determineWinningCombo(box1, box2, box3, color) {
    if (box1.css("background-color") === color && box2.css("background-color") === color && box3.css("background-color") === color){
        alert("You win");
    }   

function winningCombo() {
    determineWinningCombo($one, $two, $three, $red);
    determineWinningCombo($four, $five, $six, $red);
    determineWinningCombo($seven, $eight, $nine, $red);
    determineWinningCombo($one, $four, $seven, $red);
    determineWinningCombo($two, $five, $eight, $red);
    determineWinningCombo($three, $six, $nine, $red);
    determineWinningCombo($one, $five, $nine, red);
    determineWinningCombo($three, $five, $seven, red);
    determineWinningCombo($one, $two, $three, blue);
    determineWinningCombo($four, $five, $six, blue);
    determineWinningCombo($seven, $eight, $nine, blue);
    determineWinningCombo($one, $four, $seven, blue);
    determineWinningCombo($two, $five, $eight, blue);
    determineWinningCombo($three, $six, $nine, blue);
    determineWinningCombo($one, $five, $nine, blue);
    determineWinningCombo($three, $five, $seven, blue);
  }
    // function winningCombo() {

    // if ($( "#one").css("background-color") === red && $("#two").css("background-color") === red && $("#three").css("background-color") === red){
    //     alert("Red wins!");}
    // if ($("#four").css("background-color") === red && $("#five").css("background-color") === red && $("#six").css("background-color") === red){
    //     alert("Red wins!");}
    // if ($("#seven").css("background-color") === red && $("#eight").css("background-color") === red && $("#nine").css("background-color") === red){
    //     alert("Red wins!");}
    // if ($("#one").css("background-color") === red && $("#four").css("background-color") === red && $("#seven").css("background-color") === red){
    //     alert("Red wins!");}
    // if ($("#two").css("background-color") === red && $("#five").css("background-color") === red && $("#eight").css("background-color") === red){
    //     alert("Red wins!");}
    // if ($("#three").css("background-color") === red && $("#six").css("background-color") === red && $("#nine").css("background-color") === red){
    //     alert("Red wins!");}
    // if ($("#one").css("background-color") === red && $("#five").css("background-color") === red && $("#nine").css("background-color") === red){
    //     alert("Red wins!");}
    // if ($("#three").css("background-color") === red && $("#five").css("background-color") === red && $("#seven").css("background-color") === red){
    //     alert("Red wins!");}
    // if ($("#one").css("background-color") === blue && $("#two").css("background-color") === blue && $("#three").css("background-color") === blue){
    //      alert("Blue wins!");}
    // if ($("#four").css("background-color") === blue && $("#five").css("background-color") === blue && $("#six").css("background-color") === blue){
    //      alert("Blue wins!");}
    // if ($("#seven").css("background-color") === blue && $("#eight").css("background-color") === blue && $("#nine").css("background-color") === blue){
    //      alert("Blue wins!");}
    // if ($("#one").css("background-color") === blue && $("#four").css("background-color") === blue && $("#seven").css("background-color") === blue){
    //      alert("Blue wins!");}
    // if ($("#two").css("background-color") === blue && $("#five").css("background-color") === blue && $("#eight").css("background-color") === blue){
    //      alert("Blue wins!");}
    // if ($("#three").css("background-color") === blue && $("#six").css("background-color") === blue && $("#nine").css("background-color") === blue){
    //      alert("Blue wins!");}
    // if ($("#one").css("background-color") === blue && $("#five").css("background-color") === blue && $("#nine").css("background-color") === blue){
    //      alert("Blue wins!");}
    // if ($("#three").css("background-color") === blue && $("#five").css("background-color") === blue && $("#seven").css("background-color") === blue){
    //      alert("Blue wins!");}
    // }

$(document).ready(function () {

		$("td").on("click", function(){

		  if($(this).css("background-color") != "rgba(0, 0, 0, 0)") {
		  	alert("Choose another box");
		  } 
		  else if(counter %  2 === 0) {
		    $(this).css("background", "red");
		     counter ++;
		     if (counter > 4) {
		     	winningCombo();
		     }
		
		 } else {
		 	$(this).css("background", "blue");
		 	counter++;
		 	if (counter > 4){
		 	winningCombo();
		  }
		}
    })
)}

