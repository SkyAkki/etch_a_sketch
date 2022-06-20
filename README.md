# etch_a_sketch

Live Project Link:
https://skyakki.github.io/etch_a_sketch/

Bug List:
1. isDown is set to false initially, so when the first mouseenter event is triggered it will not paint the cell.
[Solved using paint cell at mousedown event trigger]
2. Accidental drag events inside the grid will cause mouseup event listener to skip, hence isDown is not set to false and cell is painted even when LMB is not pressed. The function resets after a click event on the grid.
[Solved using event.preventDefault(); in the mouseDown event listener]
3. If mousedown is started inside the grid but mouseup is done outside the grid, again the isDown is always stuck to True.
[Solved using document.eventListener at mouseUp event]


Important Learnings:
1. Function call returns the control to the line it is called from. So when calling by button click it will return to that line instead of the default call. (Seems obvious at this point now)
[Solved by using same global variable to capture the control return at both default and onClick call]

Links:
1. Link to button style code : https://stackoverflow.com/questions/52618358/transparent-background-overriding-box-shadow/52620619