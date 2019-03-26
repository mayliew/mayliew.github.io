

let turn = 1;
let winner = false;
let count = 9;

let winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const click = document.getElementById('board');
const restartBtn = document.getElementById('restart');

function marker() {
    if (turn%2 == 1) {
        return "X"
    } else {
        return "O"
    }
} 

function checkWinner() {
    winningCombos.forEach(function(combo) {
        let boardState = combo
        .map(function(position) {
            return board.children[position].innerHTML;
        })
        .join("");
        console.log(boardState)
        if (boardState === "XXX" || boardState === "OOO"){
            winner = true;
            document.getElementById('winningStatement').innerHTML = 'You won!'
        }
    })
}

click.addEventListener('click', function(e) {
    if (e.target.innerHTML == '' & winner == false){
        e.target.innerHTML = marker()
        if (marker() == 'X') {
            e.target.setAttribute("style", "background-color: pink;");
        } else {
            e.target.setAttribute("style", "background-color: lightgreen;");
        }
        turn++
        checkWinner()
        count--
        if (count == 0 && !winner) {
            document.getElementById('winningStatement').innerHTML = "It's a tie"
        }
    }
        console.log(count)
    }
)

console.log(count)

restartBtn.addEventListener('click', function() {
    alert ('Restarting the game!')
    window.location.reload()
}
)

