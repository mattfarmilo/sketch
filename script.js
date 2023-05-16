//Create container as global variable
const container = document.querySelector('.container');

//Function to create required number of divs
function createDivs (num) {
  for (let i = num * num; i > 0; i--) {
    const div = document.createElement('div');
    div.classList.add('child')
    container.appendChild(div);
  }
}

//Function to format divs into grid and add event listeners
function formatDivs (num) {
  const containerSize = container.clientHeight;
  const childSize = Math.floor(containerSize / num);
  const children = document.querySelectorAll('.child')

  children.forEach((child) => {
    child.setAttribute('style', `height: ${childSize}px; width: ${childSize}px;`)
    child.addEventListener('hover', () => {
      child.setAttribute('style', 'background-color: black;');
    })
  })
}

//Website
const size = 2;
createDivs(size);
formatDivs(size);