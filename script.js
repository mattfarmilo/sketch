//Create container as global variable
const container = document.querySelector('.container');

//Function to create required number of divs
function createDivs (num) {
  for (let i = size * size; i > 0; i--) {
    const div = document.createElement('div');
    div.classList.add('child')
    container.appendChild(div);
  }
}

//Function to format divs into grid


//Website
const size = 2;
createDivs(size);