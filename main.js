let btn = document.querySelector('#btn');

let storeVal;

let gridContainer = document.querySelector('.container');

let makeGrid = (storeVal) => {
  for (i = 0; i < storeVal * storeVal; i++) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    if (i < storeVal * storeVal) {
      let gridItems = document.createElement('div');
      gridItems.classList.add('items');
      gridContainer.appendChild(gridItems);
      gridItems.parentElement.style.gridTemplateColumns = `repeat(${storeVal}, 1fr)`;
      gridItems.onmouseenter = function (e) {
        gridItems.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
        e.stopImmediatePropagation;
      };
    } else {
      console.log('complete');
    }
  }
};

window.onload = function () {
  storeVal = 16;
  makeGrid(storeVal);
};

btn.addEventListener('click', function () {
  if (gridContainer.childElementCount > 0) {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
  }
  storeVal = prompt('Enter a Number');
  if (storeVal > 64) {
    storeVal = prompt('Only Numbers 1-64');
  }

  makeGrid(storeVal);
});
