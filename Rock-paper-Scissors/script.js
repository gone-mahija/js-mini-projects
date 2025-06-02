const choices=['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('.choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const outcomeDisplay = document.getElementById('outcome');
const resetBtn = document.getElementById('reset');

buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        const playerChoice = button.dataset.choice.toLowerCase();
        const computerChoice = getComputerChoice();
        const result=getResult(playerChoice, computerChoice);
        
        playerChoiceDisplay.textContent=`You chose: ${capitalize(playerChoice)}`;
        computerChoiceDisplay.textContent=`Computer chose: ${capitalize(computerChoice)}`;
        outcomeDisplay.textContent=result;
    })
})

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function getResult(player, computer) {
    if(player==computer) return "It's a draw!";

    if(
        (player ==='rock' && computer ==='scissors') ||
        (player ==='paper' && computer ==='rock') ||
        (player ==='scissors' && computer ==='paper')
    ) {
        return "You won the Game";
    } else {
        return "Computer Won the Game";
    }
}

resetBtn.addEventListener('click', ()=> {
    playerChoiceDisplay.textContent='';
    computerChoiceDisplay.textContent='';
    outcomeDisplay.textContent='';
})

function capitalize(word) {
    return word.charAt(0).toUpperCase()+word.slice(1);
}
