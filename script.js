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

const player1 = player();
player1.placeX(0);
player1.placeX(1);
player1.placeX(2);
// const player2 = player();
// player1.placeO(3);
// player1.placeO(4);
// player1.placeO(5);
console.log(gameBoard);

function positionCheck(symbol) {
    const positions = gameBoard.entries();
    let playerCombination = [];
    for (const element of positions) {
        if (element[1] !== undefined && element[1] === symbol) {
            position = element[0];
            playerCombination.push(position);
        }
    }
    winningPositions.forEach((winningCombination) => {
        let winningString = winningCombination.toString();
        let playerString = playerCombination.toString();
        console.log(playerString.includes(winningString));
    });
}
