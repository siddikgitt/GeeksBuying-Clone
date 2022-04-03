
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function currentDiv(n) {
showDivs(slideIndex = n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" w3-white", "");
}
x[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " w3-white";
}

// Set the date we're counting down to
var countDownDate = new Date("apr 5, 2022 15:37:25").getTime();


var x = setInterval(function() {

var now = new Date().getTime();
  
var distance = countDownDate - now;
  
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(days<10){days= "0"+days}
  if(hours<10){hours= "0"+hours}
  if(minutes<10){minutes= "0"+minutes}
  if(seconds<10){seconds= "0"+seconds}
document.querySelector(".day").innerHTML = days;
document.querySelector(".hur").innerHTML = hours;
document.querySelector(".min").innerHTML = minutes;
document.querySelector(".sec").innerHTML = seconds;
  
if (distance < 0) {
  clearInterval(x);
  document.querySelector("h4").innerText = "EXPIRED";
}
}, 1000);
