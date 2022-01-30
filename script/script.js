let gridSize;
let newGrid = document.querySelector(".container");
let gridCellDivs = loadGrid(gridSize = 5);
let isDown = false;

function draw(colorChoice)
{
    gridCellDivs.forEach(element => {
        element.addEventListener("mouseenter", function(event)
        {
            element.addEventListener("mousedown", function(event)
            {
                isDown = true;
                event.target.style.backgroundColor = colorChoice;
                event.preventDefault();
            })
            document.addEventListener("mouseup",function(event)
            {
                isDown = false;
            })
            if (isDown)
            {
                event.target.style.backgroundColor = colorChoice;
            }
        });
    });
}
function randomColor()
{
    
}
function pencil()
{
    let colorChoice = "purple";
    draw(colorChoice);
}
function eraser()
{
    let colorChoice = "white";
    draw(colorChoice);
}
function rainbow()
{
    let colorChoice = randomColor();
    draw(colorChoice);
}
function clearall()
{
    gridCellDivs.forEach(element => {
        element.style.backgroundColor = "white"
    })
}
function loadGrid(gridSize)
{
    let i = 0;
    newheight = 360/gridSize;
    newpadding = newheight/2;
    for (i=0; i<gridSize**2; i++)
    {
        const newDiv = document.createElement("div");
        newDiv.style.padding = `${newpadding}px`;
        newGrid.appendChild(newDiv);
    }
    let cellDivs = document.querySelectorAll(".container > div");
    return cellDivs;
}
function changeGrid()
{
    let input = prompt("Please enter a number less than 100 for number of grid cells", "25");
    inputValue = parseInt(input);
    if (input != null && inputValue<=100) 
    {
      while (newGrid.firstChild) 
      {
        newGrid.firstChild.remove()
      }
      gridCellDivs = loadGrid(inputValue);
    }
}