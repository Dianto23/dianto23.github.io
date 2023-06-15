/*var elem = document.getElementById("animasi-teks");
var position = 0;
var direction = 1;
var animationInterval = setInterval(moveAnimation, 10);

function moveAnimation() {
  position += direction;
  elem.style.left = position + "px";
  
  if (position >= window.innerWidth - elem.offsetWidth || position <= 0) {
    direction *= -1;
  }
}*/

var btn = document.getElementById("btn-click");
var result = document.getElementById("result");

btn.addEventListener("click", function() {
    result.textContent = "Tombol telah diklik";
});