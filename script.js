let gameBoard = [];
let winningPositions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

function player() {
    function placeX(num) {
        if (!isOccupied(num)) {
            gameBoard[num] = "X";
            positionCheck("X")
        }  
    }
    function placeO(num) {
        if (!isOccupied(num)) {
            gameBoard[num] = "O";
            positionCheck("O")
        }
    }
    function isOccupied(num) {
        return Object.hasOwn(gameBoard, num);    
    }
    return {placeX, placeO};
};

function positionCheck(symbol) {
    const positions = gameBoard.entries();
    let playerCombination = [];
    for (const element of positions) {
        if (element[1] !== undefined && element[1] === symbol) {
            const position = element[0];
            playerCombination.push(position);
        }
    }
    winningPositions.forEach((winningCombination) => {
        let winningString = winningCombination.toString();
        let playerString = playerCombination.toString();
        if (playerString.includes(winningString) === true) {
            console.log("You are the winner!")
        }
    });
}

// work on below

let player1, player2;
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    player1 = player();
    player2 = player();
    playable();
});

let count = 1;
const gameSquares = document.getElementsByClassName("game-square");

function playable() {
    for (let [index, square] of Array.from(gameSquares).entries()) {
        square.addEventListener("click", function(event) {
            event.preventDefault();
            if ((count % 2 !== 0) && (count < 10)) {
                square.textContent = "X";
                player1.placeX(index);
                count++;
            } else {
                square.textContent = "O";
                player2.placeO(index);
                count++;
            }
        });
    }
}
