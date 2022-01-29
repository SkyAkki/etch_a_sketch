let newGrid = document.querySelector(".container");
let i = 0;
for (i=0; i<256; i++)
{
    const newDiv = document.createElement("div");
    newGrid.appendChild(newDiv);
}
let hoverDiv = document.querySelectorAll(".container > div")
let isDown = false;
hoverDiv.forEach(element => {
    element.addEventListener("mouseenter", function(event)
    {
        element.addEventListener("mousedown", function(event)
        {
            isDown = true;
            event.target.style.backgroundColor = "purple";
            event.preventDefault();
        })
        document.addEventListener("mouseup",function(event)
        {
            isDown = false;
        })
        if (isDown)
        {
            event.target.style.backgroundColor = "purple";
        }
    });
});