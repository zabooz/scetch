const valOfSlider = document.querySelector("#val");
const gridContainer = document.querySelector(".gridContainer");
const gridSlider = document.querySelector("#numberOfBoxes");

const colors = 'green,red,blue,yellow,brown,pink,orange'.split(',')

gridSlider.oninput = () => sliderValue();

function sliderValue() {
  gridContainer.innerHTML ='';
  let gridSize = gridSlider.value;
  valOfSlider.textContent = gridSize;
  let str = "";
  
  for (let i = 1; i <= gridSize; i++) {
    str += "1fr ";
  }
  gridContainer.style.gridTemplateRows = str;
  gridContainer.style.gridTemplateColumns = str;
  
  for (let i = 0; i < gridSize * gridSize; i++) {
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    box.onmouseover = () => changeColor(box);
    gridContainer.appendChild(box);
  }
}
function changeColor(box){
  const x = Math.floor(Math.random()*7);
  box.style.backgroundColor = colors[x];
}
