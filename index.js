const stone = 'stone';
const paper = 'paper';
const scissors = 'scissors';

const playerConst = 'player';
const computerConst = 'computer'
const drawConst = 'draw';

let playerPoints = 0;
let computerPoints = 0;

// Raffle about two numbers
function raffle(min, max){
    return Math.floor(Math.random() * (max-min +1)) + min;
}

function message(text){ document.querySelector("div#message").innerHTML = text; }
function setName(name){ document.querySelector("span#player-name").innerHTML = name; }
function setPoints(player, computer){
    document.querySelector("span#player-points").innerHTML = player;
    document.querySelector("span#computer-points").innerHTML = computer;
}

function chooseWinner(choice){
    switch (choice) {
        case playerConst:
            addPoints(playerConst);
            break;
        case computerConst:
            addPoints(computerConst);
            break;
        case drawConst:
            message("Empate!");
            break;
        default:
            break;
    }
}

function addPoints(choice){
    switch (choice) {
        case playerConst:
            playerPoints++;
            message(`Ponto para o ${name}!`);
            break;
        case computerConst:
            computerPoints++;
            message(`Ponto para o computador!`);
            break;
        default:
            break;
    }
    setPoints(playerPoints, computerPoints);
}

// Calculate the winner / 0-draw / 1-player / 2-computer
function calculateChoice(playerChoice, computerChoice){
    let draw = 0, player = 1, computer = 2;
    let stone = 0, paper = 1;
    if(playerChoice == computerChoice){
        return draw;
    }else if(playerChoice == stone){
        if(computerChoice == paper){ return computer } else { return player }
    }else if(playerChoice == paper){
        if(computerChoice == stone){ return player } else { return computer }
    }else{ if(computerChoice == paper){ return player } else { return computer } }
}

let computerChoice;
function play(choice){
    let playerChoice = choice == stone ? 0 : choice == paper ? 1 : 2;
    // Raffle the computer choice
    computerChoice = raffle(0, 2);

    // Calculate who wins
    let winner = calculateChoice(playerChoice, computerChoice);
    let passWinner = winner == 0 ? drawConst : winner == 1 ? playerConst : computerConst;

    chooseWinner(passWinner);

    document.getElementById(`player-choice-${playerChoice+1}`).classList.add('selected');
    document.getElementById(`computer-choice-${computerChoice+1}`).classList.add('selected');
    setTimeout(()=>{
        document.getElementById(`player-choice-${playerChoice+1}`).classList.remove('selected');
        document.getElementById(`computer-choice-${computerChoice+1}`).classList.remove('selected');
    }, 1500);
    // Add points

    // Show the user option





    switch (choice) {
        case stone:
            
            break;
        case paper:
            
            break;
        case scissors:
            
            break;
        default:
            break;
    }
}

document.getElementById("player-choice-1").onclick = () => {play(stone)}
document.getElementById("player-choice-2").onclick = () => {play(paper)}
document.getElementById("player-choice-3").onclick = () => {play(scissors)}

let name = prompt("Qual é seu nome?");
while(name == null || name == ""){
    name = prompt("Nome inválido. Qual é seu nome?"); 
}

message(`Olá ${name}, está preparado? Escolha uma opção acima`);
setName(name);