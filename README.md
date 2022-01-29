# etch_a_sketch

Bug List:
1. isDown is set to false initially, so when the first mouseenter event is triggered it will not paint the cell.
[Solved using paint cell at mousedown event trigger]
2. Accidental drag events inside the grid will cause mouseup event listener to skip, hence isDown is not set to false and cell is painted even when LMB is not pressed. The function resets after a click event on the grid.
[Solved using event.preventDefault(); in the mouseDown event listener]
3. If mousedown is started inside the grid but mouseup is done outside the grid, again the isDown is always stuck to True.
[Solved using document.eventListener at mouseUp event]