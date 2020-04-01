const body = document.querySelector('body');
const button = document.getElementById('btn');
const copy = document.getElementById('hex-value');
// colors legend [0:brown, 1:grey, 2:pink, 3:purple, 4:blue, 5:turquoise, 6:green, 7:yellow, 8:gold]
const colors = ['#A1887F', '#B0BEC5', '#FFCDD2', '#FFCDD2', '#D1C4E9', '#BBDEFB', '#B2EBF2', '#DCEDC8', '#FFF9C4', '#FFECB3'];

button.addEventListener('click', changeHex);

function changeHex() {
  let randomNumber = parseInt(Math.random() * colors.length);
  body.style.background = colors[randomNumber];
  copy.innerHTML = ` ${colors[randomNumber]}`;
}