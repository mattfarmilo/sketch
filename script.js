//Function to create required number of divs
function createDivs (num) {
  const container = document.querySelector('.container');
  const childSize = 650 / num;
  
  for (let i = num * num; i > 0; i--) {
    const div = document.createElement('div');
    div.classList.add('child')
    div.setAttribute('style', `height: ${childSize}px; width: ${childSize}px; background-color: rgb(255,255,255);`);
    container.appendChild(div);
  }

  hoverEvent();
}

//Function to add event listener to divs
 function hoverEvent () {
  const divs = document.querySelectorAll('.child');
  const mode = document.querySelector('#mode').value;

  divs.forEach(div => {
    div.addEventListener('mouseover', (e) => {
      if (mode === 'standard') {
        e.target.style.backgroundColor = 'black';
      }
      if (mode === 'rainbow') {
        e.target.style.backgroundColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
      }
      if (mode === 'shade') {
        console.log(e.target.style.backgroundColor);
      }
    });
  });
 }

 //Function to generate random number
 function randNum() {
  return Math.floor(Math.random() * 256);
 }

 //Function to reset page and set dimensions
 function reset () {
  const container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  size = Number(prompt('How many pixels on each side of your grid?'));

  if (size > 100 || size < 1) {
    alert('Please enter a number from 1-100');
    reset();
  }
  createDivs(size);
 }

//Website
let size = 16;
createDivs(size);

//Add event listener to button
const btn = document.querySelector('button');
btn.addEventListener('click', reset);