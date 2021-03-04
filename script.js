let currentPlayer = 1; // 1 for player 1 & 2 for player 2




const Players = function(name,marker){
    this.name = name;
    this.marker = marker;
};

const gameBoard = (function(){
    let gameBoardArray = [0,0,0,0,0,0,0,0,0];
    return{
        gameBoardArray,
    }
})();

const buttons = (function(){
    let button = document.querySelectorAll('.grid-item');
    button.forEach((element)=>{
        element.addEventListener('click', function(){
            userPressedButton.buttonPressed(element);
        });
    });

    function clearButtons(){
        button.forEach((element)=>{
            element.innerHTML = "";
        });
    };

    return{
        clearButtons,
    }
})();

const restartButton = (function(){

    button = document.querySelector('button').addEventListener('click', function(){

        currentPlayer = 1;
        restartGame.restartBoard();
        buttons.clearButtons();

        // if(currentPlayer == 1){
        //     currentPlayer = 1;
        // }

        // if(currentPlayer == 2){
        //     currentPlayer = 2;
        // }
    });

})();

const checkBoardForWinner = (function(array){
    function findAWinner(){
        if((gameBoard.gameBoardArray[0] == 1 &&  gameBoard.gameBoardArray[1] == 1 && gameBoard.gameBoardArray[2] == 1) ||
           (gameBoard.gameBoardArray[3] == 1 &&  gameBoard.gameBoardArray[4] == 1 && gameBoard.gameBoardArray[5] == 1)||
           (gameBoard.gameBoardArray[6] == 1 &&  gameBoard.gameBoardArray[7] == 1 && gameBoard.gameBoardArray[8] == 1)||
           (gameBoard.gameBoardArray[0] == 1 &&  gameBoard.gameBoardArray[3] == 1 && gameBoard.gameBoardArray[6] == 1)||
           (gameBoard.gameBoardArray[1] == 1 &&  gameBoard.gameBoardArray[4] == 1 && gameBoard.gameBoardArray[7] == 1)||
           (gameBoard.gameBoardArray[2] == 1 &&  gameBoard.gameBoardArray[5] == 1 && gameBoard.gameBoardArray[8] == 1)||
           (gameBoard.gameBoardArray[0] == 1 &&  gameBoard.gameBoardArray[4] == 1 && gameBoard.gameBoardArray[8] == 1)||
           (gameBoard.gameBoardArray[2] == 1 &&  gameBoard.gameBoardArray[4] == 1 && gameBoard.gameBoardArray[6] == 1)){
                alert('Player 1 Won!');
                return;
        }
                
        if((gameBoard.gameBoardArray[0] == 2 &&  gameBoard.gameBoardArray[1] == 2 && gameBoard.gameBoardArray[2] == 2) ||
            (gameBoard.gameBoardArray[3] == 2 &&  gameBoard.gameBoardArray[4] == 2 && gameBoard.gameBoardArray[5] == 2)||
            (gameBoard.gameBoardArray[6] == 2 &&  gameBoard.gameBoardArray[7] == 2 && gameBoard.gameBoardArray[8] == 2)||
            (gameBoard.gameBoardArray[0] == 2 &&  gameBoard.gameBoardArray[3] == 2 && gameBoard.gameBoardArray[6] == 2)||
            (gameBoard.gameBoardArray[1] == 2 &&  gameBoard.gameBoardArray[4] == 2 && gameBoard.gameBoardArray[7] == 2)||
            (gameBoard.gameBoardArray[2] == 2 &&  gameBoard.gameBoardArray[5] == 2 && gameBoard.gameBoardArray[8] == 2)||
            (gameBoard.gameBoardArray[0] == 2 &&  gameBoard.gameBoardArray[4] == 2 && gameBoard.gameBoardArray[8] == 2)||
            (gameBoard.gameBoardArray[2] == 2 &&  gameBoard.gameBoardArray[4] == 2 && gameBoard.gameBoardArray[6] == 2)){
            alert('Plaer 2 Won!');
            return;
        }
    }
    return{
        findAWinner,
    }
})(gameBoard.gameBoardArray);

const updateGameBoard = (function(array){
    function updateBlocks(element){
        if(currentPlayer === 1){
            element.innerHTML="X";
        }else if(currentPlayer === 2){
            element.innerHTML ='O';
        }
    }

    return{
        updateBlocks,
    }
})(gameBoard.gameBoardArray);


const userPressedButton = (function(){
    function buttonPressed(element){
        playersChoice.pushPlayerChoice(element);
    }
    return{
        buttonPressed,
    }
})();


const playersChoice = (function(){
    let playersCurrentChoice;
    function pushPlayerChoice(element){
        playersCurrentChoice = element.getAttribute('data-index');


        if(gameBoard.gameBoardArray[playersCurrentChoice] == 1 || gameBoard.gameBoardArray[playersCurrentChoice] == 2){
            return;
        }else{
            if(currentPlayer == 1){
                gameBoard.gameBoardArray[playersCurrentChoice] = currentPlayer;
                updateGameBoard.updateBlocks(element);
                setTimeout(()=>checkBoardForWinner.findAWinner(), 100);
                currentPlayer = 2;

                return;
            }else if(currentPlayer == 2){
                gameBoard.gameBoardArray[playersCurrentChoice] = currentPlayer;
                updateGameBoard.updateBlocks(element);
                setTimeout(()=>checkBoardForWinner.findAWinner(), 100);
                currentPlayer = 1;

                return;
            }
        }
    }


    return {
        pushPlayerChoice, 
    }
})();




const restartGame = (function(){



    function restartBoard(){
        gameBoard.gameBoardArray = [0,0,0,0,0,0,0,0,0];


    }
    return{
        restartBoard,
    }
    

})()




