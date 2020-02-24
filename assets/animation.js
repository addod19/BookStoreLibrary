// Wrap every letter in a span
var textWrapper = document.querySelector('.inner-wrapper .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.inner-wrapper .letter',
  scale: [0.3,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 600,
  delay: (el, i) => 70 * (i+1)
}).add({
  targets: '.inner-wrapper .line',
  scaleX: [0,1],
  opacity: [0.5,1],
  easing: "easeOutExpo",
  duration: 700,
  offset: '-=875',
  delay: (el, i, l) => 80 * (l - i)
}).add({
  targets: '.inner-wrapper',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});

/* modal effect */
// Get the button that opens the modal
var btn = document.getElementById("");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}