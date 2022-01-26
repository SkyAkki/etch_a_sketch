let newGrid = document.querySelector(".container");
let i = 0;
for (i=0; i<256; i++)
{
    const newDiv = document.createElement("div");
    newGrid.appendChild(newDiv);
}
let hoverDiv = document.querySelectorAll(".container > div")
hoverDiv.forEach(element => {
    element.addEventListener("mouseenter", function(event)
{
    event.target.style.backgroundColor = "purple"
});
});