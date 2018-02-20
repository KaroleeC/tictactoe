const prompt = require("prompt");

const printBoard = (board) => {
board.forEach(element => {
  console.log(element);
});

}

const GetUserResponse = (board, turn) => {
  prompt.get(['row', 'column'], (err, result) => {
    console.log(' You chose,', result.row, result.column);
    if(turn){
      board[result.row][result.column] = 'x'
    } else {
      board[result.row][result.column] = 'o'
    }
    turn = !turn;
    printBoard(board);
  })
}

prompt.start();
console.log("TICTACTOE")

const Game = () => {
  //true indicates player 1
 let turn = true;
  let board = [[0,0,0],[0,0,0],[0,0,0]];
  printBoard(board);
  GetUserResponse(board, turn)
  
}

Game();
