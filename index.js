const toggles=document.querySelector(".toggle-rect");
const body = document.querySelector("body");
// var swit = document.getElementsByClassName("span");

toggles.addEventListener("click", function(){
    body.classList.toggle("light");
    toggles.classList.toggle("moving");

});