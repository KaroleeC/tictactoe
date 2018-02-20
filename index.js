const prompt = require("prompt");

const printBoard = (board) => {
board.forEach(element => {
  console.log(element);
});

}

const CheckWinner = (board, turn) => {
  let winner, check;
  if(turn){
    check = 'x'
  } else {
    check = 'o'
  }
  //horizontal
  board.forEach(row => {
    let count = 0;
    row.forEach(index => {
      if(index === check) {
        count += 1
      }
      if(count === 3){
        winner = check;
      }
    })
  })
  //vertical
  for(let col = 0; col < 3; col++ ) {
    let count = 0;
    for(let row = 0; row < 3; row++) { 
      if(board[row][col] === check) {
        count += 1
      }
    } 
    if(count === 3) {
      winner = check;
    } 
  }
//diagnal

if(winner){
  console.log(winner, 'won!' )
} else { GetUserResponse(board, !turn) }

}

const GetUserResponse = (board, turn) => {
  prompt.get(['row', 'column'], (err, result) => {
    console.log(' You chose,', result.row, result.column);
    if(turn){
      board[result.row][result.column] = 'x'
    } else {
      board[result.row][result.column] = 'o'
    }
    
    printBoard(board);
    CheckWinner(board, turn);
  })
}

prompt.start();
console.log("TICTACTOE")

const Game = () => {
  //true indicates player 1 'x'
 let turn = true;
 let round = 0;
  let board = [[0,0,0],[0,0,0],[0,0,0]];
  printBoard(board);
  GetUserResponse(board, turn)
  
}

Game();
