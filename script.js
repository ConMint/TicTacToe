const square11 = document.getElementById('square11');
const square12 = document.getElementById('square12');
const square13 = document.getElementById('square13');
const square21 = document.getElementById('square21');
const square22 = document.getElementById('square22');
const square23 = document.getElementById('square23');
const square31 = document.getElementById('square31');
const square32 = document.getElementById('square32');
const square33 = document.getElementById('square33');

let board = [];

// POPULATES THE GAMEBOARD 

// let gameBoard = (function() {
//     let board = [square11.innerText,'O','','','','','','',''];
    
    


//     return {
//         populateBoard: populateBoard,
        
//     }

// })();

// let generateBoardArray = (function() {
//         board.forEach.call( document.getElementsByClassName('squares'), function (  square) {
//                 board.push(square.textContent)
//         });
        
//     })
// PLAYER FACTORY

// const playerFactory = function(name,marker) {
//     return {name,marker}

// }

// const player1 = playerFactory(prompt('Who will play as crosses?'), 'X')
// const player2 = playerFactory(prompt('Who will play as noughts?'),'O')


// CHANGING MARKERS FUNCTION

let changeMarkerX = function() {
    window.onclick = e => {
        if (e.target.classList.contains('squares') && e.target.innerText != 'O' ) {
        e.target.innerText = 'X';
        
        changeMarkerO();
        console.log(board)
        
        }
        
    }

}

let changeMarkerO = function() {
    window.onclick = e => {
        if (e.target.classList.contains('squares') && e.target.innerText != 'X' ) {
        e.target.innerText = 'O'
        board.push(e.target.innerText)
        changeMarkerX();
        
        }
        
    }

}








changeMarkerX();


// Conzo man use this tmro

console.log(square31.dataset.spot)