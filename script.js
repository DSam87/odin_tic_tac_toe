

// const currentTurn = (function(){
//     let playerTurn = 0;
// })();

// const flowOfGame = (function(){

//     if(currentTurn.playerTurn === 1){


//     }

//     return {
//         sayName: function(){
//             console.log('hihi');
//         }
//     }

// })();

// const boardDisplay = (function(){
//     this.buttons = document.querySelectorAll('.grid-item');
//     this.storage = [];
//     buttons.forEach(element => {
//         element.addEventListener('click', function(){
//             console.log(element);
//             let lastClicked = element.getAttribute('data-index');
//             storage.push(lastClicked);
//             flowOfGame.sayName();
//         });
        
//     });
//     return {storage};
// })(); 



// let createPlayer = function(name, symbol){
//     this.name = name;
//     this.symbol = symbol;
//     return {name: name, symbol:symbol};

// };


// let playerOne = createPlayer('sam','X');















// GameFlow
    // if 0
        // Player Choice
                // put choic in array gameboard
                    // update boared


    // if 1
        // Computer Choice
                // put choic in array gameboard
                    // update boared

// Update Board

// Gamebord object array



const gameBoard = (function(){
    let gameBoardArray = [];
    return{
        gameBoardArray,
    }
})();


const updateGameBoard = (function(array){
    console.log(array);

})(gameBoard.gameBoardArray);




const usersButtons = (function(){
    let buttons = document.querySelectorAll('.grid-item');
    buttons.forEach((element)=>{
        element.addEventListener('click', function(){
            console.log(element);
            playersChoice.sayElement(element);

        });
    });

})();


const playersChoice = (function(){
    let playersCurrentChoice;
    function sayElement(element){
        playersCurrentChoice = element.getAttribute('data-index');
        console.log(playersCurrentChoice);
        gameBoard.gameBoardArray.push(playersCurrentChoice);

    }


    return {
        sayElement,
        
    }



})();






