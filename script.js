
var counter = 0;
var red = "rgb(255, 0, 0)"
var blue = "rgb(0, 0, 255)"
function winningCombo () {
    if ($("#one").css("background-color") === red && $("#two").css("background-color") === red && $("#three").css("background-color") === red){
        alert("Red wins!");}
    if ($("#four").css("background-color") === red && $("#five").css("background-color") === red && $("#six").css("background-color") === red){
        alert("Red wins!");}
    if ($("#seven").css("background-color") === red && $("#eight").css("background-color") === red && $("#nine").css("background-color") === red){
        alert("Red wins!");}
    if ($("#one").css("background-color") === red && $("#four").css("background-color") === red && $("#seven").css("background-color") === red){
        alert("Red wins!");}
    if ($("#two").css("background-color") === red && $("#five").css("background-color") === red && $("#eight").css("background-color") === red){
        alert("Red wins!");}
    if ($("#three").css("background-color") === red && $("#six").css("background-color") === red && $("#nine").css("background-color") === red){
        alert("Red wins!");}
    if ($("#one").css("background-color") === red && $("#five").css("background-color") === red && $("#nine").css("background-color") === red){
        alert("Red wins!");}
    if ($("#three").css("background-color") === red && $("#five").css("background-color") === red && $("#seven").css("background-color") === red){
        alert("Red wins!");}
    if ($("#one").css("background-color") === blue && $("#two").css("background-color") === blue && $("#three").css("background-color") === blue){
         alert("Blue wins!");}
    if ($("#four").css("background-color") === blue && $("#five").css("background-color") === blue && $("#six").css("background-color") === blue){
         alert("Blue wins!");}
    if ($("#seven").css("background-color") === blue && $("#eight").css("background-color") === blue && $("#nine").css("background-color") === blue){
         alert("Blue wins!");}
    if ($("#one").css("background-color") === blue && $("#four").css("background-color") === blue && $("#seven").css("background-color") === blue){
         alert("Blue wins!");}
    if ($("#two").css("background-color") === blue && $("#five").css("background-color") === blue && $("#eight").css("background-color") === blue){
         alert("Blue wins!");}
    if ($("#three").css("background-color") === blue && $("#six").css("background-color") === blue && $("#nine").css("background-color") === blue){
         alert("Blue wins!");}
    if ($("#one").css("background-color") === blue && $("#five").css("background-color") === blue && $("#nine").css("background-color") === blue){
         alert("Blue wins!");}
    if ($("#three").css("background-color") === blue && $("#five").css("background-color") === blue && $("#seven").css("background-color") === blue){
         alert("Blue wins!");}
    }

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
});
     
});	 
