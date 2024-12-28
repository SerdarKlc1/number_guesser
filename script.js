let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (user, computer, target) => {
    if (user > 10) {
        alertHandler() ;
    }
    if (target === user ) {
        return true;
    } else if (Math.abs(target - user) <= Math.abs(target - computer)){
        return true;
    } else {
        return false;
    }
};
function alertHandler(user){
    if (user > 10) {
        return alert('please choose between 0-9')
    }

}
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
};

const advanceRound = () => currentRoundNumber += 1;

console.log(generateTarget())