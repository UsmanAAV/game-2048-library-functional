# game 2048 library
A library based in a functional programming paradigm to creates a 2048 game.

## Docs API

### addNumberToPlayField
`addNumberToPlayField(playField)`

Adds a random number (2 or 4) instead of one of the empty cells.

### initPlayField
`initPlayField()`

Creates a new playing field with empty cells and adds a random number (2 or 4) on a randomly selected cell.

### movePlayField
`movePlayField(playField, direction)`

Makes a move on the playing field in the specified direction.

###isWin
`isWin(playField)`

Checks if there is a cell with the number 2048 on the playing field.

### isLoss
`isLoss(playField)`

If all cells are occupied and it is impossible to make a move, then the player is defeated.
