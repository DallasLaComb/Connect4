let row1 = document.getElementsByClassName("r1");
let row2 = document.getElementsByClassName("r2");
let row3 = document.getElementsByClassName("r3");
let row4 = document.getElementsByClassName("r4");
let row5 = document.getElementsByClassName("r5");
let row6 = document.getElementsByClassName("r6");
let board = [row1, row2, row3, row4, row5, row6]; // Left to right [0,0], [0,1]... [0,6], [1,0]
let cols = document.getElementsByClassName("col");

let colCounter0 = 5;
let colCounter1 = 5;
let colCounter2 = 5;
let colCounter3 = 5;
let colCounter4 = 5;
let colCounter5 = 5;
let colCounter6 = 5;
var turnCounter = 1;


cols[0].addEventListener("click", colz0);
cols[1].addEventListener("click", colz1);
cols[2].addEventListener("click", colz2);
cols[3].addEventListener("click", colz3);
cols[4].addEventListener("click", colz4);
cols[5].addEventListener("click", colz5);
cols[6].addEventListener("click", colz6);
if (turnCounter == 1) {
    var playerTurn = "blue";
}

let changePlayerTurn = () => {
    if (turnCounter % 2 == 0) {
        playerTurn = "red";
        console.log(turnCounter)

    } 
    else {
        playerTurn = "blue";
        console.log(turnCounter)

    }
}
//=========================================================================================================================================================================================
// Check Win Conditions
let checkHorizontalWinCondition = () => {

    for (let i = 0; i < 6; i++) {
        for (j = 0; j < 4; j++) {
            if ((board[i][j].classList.contains("red") && board[i][j + 1].classList.contains("red")) && (board[i][j + 2].classList.contains("red") && board[i][j + 3].classList.contains("red"))) {
                alert("RED IS THE HORIZONTAL WINNER!");
                playerTurn = 43;
            } 
            else if ((board[i][j].classList.contains("blue") && board[i][j + 1].classList.contains("blue")) && (board[i][j + 2].classList.contains("blue") && board[i][j + 3].classList.contains("blue"))) {
                alert("BLUE IS THE HORIZONTAL WINNER!");
                playerTurn = 43;
            } 
            else {
                console.log("CONTINUE...")
            }
        }
    }
}

let checkVerticalWinCondition = () =>{
    for (let i = 0; i < 3; i++) {
        for (j = 0; j < 7; j++) {
            if ((board[i][j].classList.contains("blue") && board[i+1][j].classList.contains("blue")) && (board[i+2][j].classList.contains("blue") && board[i+3][j].classList.contains("blue"))){
                alert("BLUE IS THE VERTICAL WINNER!");
                playerTurn = 43;
            }
            else if(((board[i][j].classList.contains("red") && board[i+1][j].classList.contains("red")) && (board[i+2][j].classList.contains("red") && board[i+3][j].classList.contains("red")))){
                alert("RED IS THE VERTICAL WINNER!");
                playerTurn = 43;
            }
            else{
                continue;
            }
        }
}
}
let ascendingDiagonalCheck = ()=>{
    for (let i=3; i<6; i++){
        for (let j=0; j<3; j++){
            if (board[i][j].classList.contains("blue") && board[i-1][j+1].classList.contains("blue") == board[i-2][j+2].classList.contains("blue") && board[i-3][j+3].classList.contains("blue")){
                alert("BLUE IS THE ASCENDING DIAGONAL WINNER!");
                playerTurn = 43;
            }
            else if(board[i][j].classList.contains("red") && board[i-1][j+1].classList.contains("red") == board[i-2][j+2].classList.contains("red") && board[i-3][j+3].classList.contains("red")){
                alert("RED IS THE ASCENDING DIAGONAL WINNER!");
                playerTurn = 43;
            }
            else{
                continue;
            }
        }
        
    }
}

let descendingDiagonalCheck = () =>{
    for (let i=3; i<6; i++){
        for (let j=3; j<6; j++){
            if (board[i][j].classList.contains("red") && board[i-1][j-1].classList.contains("red") == board[i-2][j-2].classList.contains("red")&& board[i-3][j-3].classList.contains("red")){
                alert("RED IS THE DESCENDING DIAGONAL WINNER!");
                playerTurn = 43;
            }
            else if(board[i][j].classList.contains("blue") && board[i-1][j-1].classList.contains("blue") == board[i-2][j-2].classList.contains("blue")&& board[i-3][j-3].classList.contains("blue")){
                alert("BLUE IS THE DESCENDING DIAGONAL WINNER!");
                playerTurn = 43;
            }
            else{
                continue;
            }
        }
    }

}

let checkWinConditions = () => {
    checkVerticalWinCondition();
    checkHorizontalWinCondition();
    ascendingDiagonalCheck();
    descendingDiagonalCheck();
}
//======================================================================================================================================================================================

//===========================================================================================================================================================================================
// Makes it so you can make a move as long as it's there's a space for it...
function colz0() {
    if (playerTurn != 43 && colCounter0 >= 0) {

        board[colCounter0][0].style.backgroundColor = playerTurn;
        board[colCounter0][0].classList.add(playerTurn);

        colCounter0--
        turnCounter++;
        changePlayerTurn();
        checkWinConditions();
    } 
    else {
        console.log("CANNOT MOVE HERE!")
    }
}

function colz1() {
    if (playerTurn != 43 && colCounter1 >= 0) {

        board[colCounter1][1].style.backgroundColor = playerTurn;
        board[colCounter1][1].classList.add(playerTurn);

        colCounter1--;
        turnCounter++;
        changePlayerTurn();
        checkWinConditions();
    } 
    else {
        console.log("CANNOT MOVE HERE!")
    }
}

function colz2() {
    if (playerTurn != 43 && colCounter2 >= 0) {

        board[colCounter2][2].style.backgroundColor = playerTurn;
        board[colCounter2][2].classList.add(playerTurn);

        colCounter2--;
        turnCounter++;
        changePlayerTurn();
        checkWinConditions();
    } 
    else {
        console.log("CANNOT MOVE HERE!")
    }
}

function colz3() {
    if (playerTurn != 43 && colCounter3 >= 0) {

        board[colCounter3][3].style.backgroundColor = playerTurn;
        board[colCounter3][3].classList.add(playerTurn);

        colCounter3--;
        turnCounter++;
        changePlayerTurn();
        checkWinConditions();
    } 
    else {
        console.log("CANNOT MOVE HERE!")
    }
}
function colz4() {
    if (playerTurn != 43 && colCounter4 >= 0) {
        board[colCounter4][4].style.backgroundColor = playerTurn;
        board[colCounter4][4].classList.add(playerTurn);
        colCounter4--;
        turnCounter++;
        changePlayerTurn();
        checkWinConditions();
    } 
    else {
        console.log("CANNOT MOVE HERE!")
    }
}
function colz5() {
    if (playerTurn != 43 && colCounter5 >= 0) {
        board[colCounter5][5].style.backgroundColor = playerTurn;
        board[colCounter5][5].classList.add(playerTurn);
        colCounter5--;
        turnCounter++;
        changePlayerTurn();
        checkWinConditions();
    } 
    else {
        console.log("CANNOT MOVE HERE!")
    }
}
function colz6() {
    if (playerTurn != 43 && colCounter6 >= 0) {
        board[colCounter6][6].style.backgroundColor = playerTurn;
        board[colCounter6][6].classList.add(playerTurn);
        colCounter6--;
        turnCounter++;
        changePlayerTurn();
        checkWinConditions();
    } 
    else {
        console.log("CANNOT MOVE HERE!")
    }
}
//===========================================================================================================================================================================================