const prompt = require("prompt");

const printBoard = (board) => {
board.forEach(element => {
  console.log(element);
});

}

const resetBoard = (board) => {
  board.forEach(element => {
    element.forEach(index => {
      index = 0;
    })
  });
  GetUserResponse(board, true);
}

const CheckWinner = (board, turn) => {
  let winner, check;
  if(turn){
    check = 'x';
  } else {
    check = 'o';
  }
  // need to refactor to remove repeats
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
  const diagnalOne = () => {
    let count = 0;
    for(let i = 0; i < 3; i++ ) { 
      if(board[i][i] === check) {
        count += 1
      }
    }
    if(count === 3) {
      winner = check;
    }
  }
  const diagnalTwo = () => {
    let count = 0;
    row = 0;
    col = 2;
    while(row <= 2) {

      if(board[row][col] === check) {
        count += 1
       }
      row += 1;
      col -= 1
    }
    
    if(count === 3) {
      winner = check;
    }
  }
  diagnalOne();
  diagnalTwo();

  if(winner){
    console.log(winner, 'won!' )
    console.log("#################");
    console.log("play again?");
    //reset board
    resetBoard(board);
  } else { GetUserResponse(board, !turn) }

}

const GetUserResponse = (board, turn) => {
  let player;
  if(turn){
    player = 'x'
  } else {
    player = 'o'
  }
  console.log('Player ', player, 'make your move');
  console.log('Please choose a row (0-2)');
  console.log('and a column (0-2)');
  prompt.get(['row', 'column'], (err, result) => {
    console.log(' You chose,', result.row, result.column);
    
      board[result.row][result.column] = player
    
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
