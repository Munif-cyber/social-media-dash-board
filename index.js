const toggles=document.querySelector(".toggle-rect");
const body = document.querySelector("body");
const big = document.querySelector("html")
// var swit = document.getElementsByClassName("span");

toggles.addEventListener("click", function(){
    body.classList.toggle("light");
    toggles.classList.toggle("moving");
    big.classList.toggle("transition")

});