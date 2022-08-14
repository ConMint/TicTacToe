// CONNECT TO DOM AND SET UP BOARD -----------------------------------
const square11 = document.getElementById('square11');
const square12 = document.getElementById('square12');
const square13 = document.getElementById('square13');
const square21 = document.getElementById('square21');
const square22 = document.getElementById('square22');
const square23 = document.getElementById('square23');
const square31 = document.getElementById('square31');
const square32 = document.getElementById('square32');
const square33 = document.getElementById('square33');
const resetBtn = document.getElementById('resetBtn')
const player1Name = document.getElementById('player1Name')
const player2Name = document.getElementById('player2Name')
const resultDisplay = document.getElementById('resultBar')

let board = ['0','1','2','3','4','5','6','7','8'];



// PLAYER FACTORY -------------------------------------------------

const playerFactory = function(name,marker) {
    return {name,marker}

};

// GET THE NAMES OF PLAYERS 
let assignNames = function  () {

    if (typeof player1 === 'undefined' || typeof player2 === 'undefined') {
    player1 = playerFactory(prompt('Who will play as crosses?', 'Player1'), 'X')
    player2 = playerFactory(prompt('Who will play as noughts?','Player2'),'O')
    }

    player1Name.innerText = player1.name + ' is playing as X'
    player2Name.innerText = player2.name + ' is playing as O'
};

// CHANGE PLAYER FUNCTIONS ----------------------------------------

let changeMarkerX = function() {
    window.onclick = e => {
        if (e.target.classList.contains('squares') && e.target.innerText === '' ) {
        e.target.innerText = 'X';
        board[e.target.dataset.spot] = 'X';
         if (checkWinner() === -1) {
            resultDisplay.innerText = (`${player1.name} wins`)
            winner = 'player1';
         } else if (checkWinner() === 0) {
            resultDisplay.innerText = (`It's a tie!`);
            winner = 'tie'
        }
        changeMarkerO();
        
        
        }
        
    }

}

let changeMarkerO = function() {
    window.onclick = e => {
        if (e.target.classList.contains('squares') && e.target.innerText === ''  ) {
        e.target.innerText = 'O';
        board[e.target.dataset.spot] = 'O'
        if (checkWinner() === -1) {
            resultDisplay.innerText = (`${player2.name} wins`)
            winner = 'player2';
        } else if (checkWinner() === 0) {
            resultDisplay.innerText = (`It's a tie!`);
            winner = 'tie';
        }
        changeMarkerX();
        
        }
        
    }

}

// Plays the game  -------------------------------------------------------

let gameBoard = function() {

    // get names
    assignNames();
    
    

    

    
    // start the game
    if (typeof winner === 'undefined') {
        changeMarkerX();
    } else if  (winner === 'player1') {
        changeMarkerO();
    } else if (winner === 'player2') {
        changeMarkerX();
    } else {
        changeMarkerX();
    }
    
};

// FUNCTION THAT CHECKS WINNER EACH TIME, CALLS FUNCTION TO CHECK FOR A DRAW
let checkWinner = function() {
    if (board[0] === board[1] && board[0] === board[2]) {
        return -1
    } else if (board[2] === board[5] && board[2] === board[8]) {
        return -1
    } else if (board[8] === board[7] && board[8] === board[6]) {
        return -1
    } else if (board[6] === board[3] && board[6] === board[0]) {
        return -1
    } else if (board[0] === board[4] && board[0] === board[8]) {
        return -1
    } else if (board[2] === board[4] && board[2] === board[6]) {
        return -1
    } else if (board[1] === board[4] && board[1] === board[7]) {
        return -1    
    } else if (board[3] === board[4] && board[3] === board[5]) {
        return -1 
    } else if (checkDraw() === 0) {
        return 0
    } else {
        return -2
    }
}
// CHECKS IF 9 MOVES HAVE BEEN MADE WITHOUT A WINNER
function checkDraw() {
    const count = {}
    for (const marker of board) {
        if (count[marker]) {
            count[marker] +=1;
        } else {
            count[marker] = 1;
        }
    }
    if (count['X'] === 5 && count['O'] === 4) {
        return 0
    } else if (count['O'] === 5 && count['X'] === 4) {
        return 0
    }
}


// RESET THE BOARD --------------------------------
resetBtn.addEventListener('click', function () {
    reset();
});


function reset() {
    board = ['0','1','2','3','4','5','6','7','8'];
    let squares = document.querySelectorAll('.squares');
    for (let i =0; i< squares.length; i++) {
        squares[i].innerText = ''
    }
    gameBoard();
    
}

// INITIALIZE
gameBoard();


