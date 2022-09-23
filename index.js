const anchor = document.getElementById('anchor');

const rect = anchor.getBoundingClientRect();

const eyes = document.querySelectorAll('.eye');

const anchorX = rect.left + rect.width / 2;
const anchorY = rect.top + rect.height / 2;

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${angleDeg - 90}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;

  const rad = Math.atan2(dy, dx);

  const deg = (rad * 180) / Math.PI;

  return deg;
}
