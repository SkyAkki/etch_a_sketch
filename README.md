# etch_a_sketch

Bug List:
1. isDown is set to false initially, so when the first mouseenter event is triggered it will not paint the cell.
2. Accidental drag events inside the grid will cause mouseup event listener to skip, hence isDown is not set to false and cell is painted even when LMB is not pressed. The function resets after a click event on the grid.