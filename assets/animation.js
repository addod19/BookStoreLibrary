// Wrap every letter in a span
const textWrapper = document.querySelector('.inner-wrapper .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// eslint-disable-next-line no-undef
anime.timeline({ loop: true })
  .add({
    targets: '.inner-wrapper .letter',
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: 'easeOutExpo',
    duration: 600,
    delay: (el, i) => 70 * (i + 1),
  }).add({
    targets: '.inner-wrapper .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: 'easeOutExpo',
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i),
  }).add({
    targets: '.inner-wrapper',
    opacity: 0,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000,
  });
