// --------------Stone--------------
function Stone() {

    let random = Math.random() * 3;
    let computerChoice;

    if (random > 0 && random <= 1) {
        computerChoice = 'Stone';
    } else if (random > 1 && random <= 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    let resultMag;
    if (computerChoice === 'Stone') {
        resultMag = `It's a Tie`;
    } else if (computerChoice === 'paper') {
        resultMag = 'computer won';
    } else if (computerChoice === 'scissors') {
        resultMag = 'user won';
    }
    alert(`You have chosen Stone. computer choice is ${computerChoice} and ${resultMag}`);
}

// --------------Paper--------------
function Paper() {

    let random2 = Math.random() * 3;
    let computerChoice2;

    if (random2 > 0 && random2 <= 1) {
        computerChoice2 = 'Stone';
    } else if (random2 > 1 && random2 <= 2) {
        computerChoice2 = 'paper';
    } else {
        computerChoice2 = 'scissors';
    }

    let resultMag2;
    if (computerChoice2 === 'Stone') {
        resultMag2 = 'user won';
    } else if (computerChoice2 === 'paper') {
        resultMag2 = `It's a Tie`;
    } else if (computerChoice2 === 'scissors') {
        resultMag2 = 'computer won';
    }
    alert(`You have chosen Paper. computer choice is ${computerChoice2} and ${resultMag2}`);
}

// --------------scissors--------------
function scissors() {

    let random3 = Math.random() * 3;
    let computerChoice3;

    if (random3 > 0 && random3 <= 1) {
        computerChoice3 = 'Stone';
    } else if (random3 > 1 && random3 <= 2) {
        computerChoice3 = 'paper';
    } else {
        computerChoice3 = 'scissors';
    }

    let resultMag3;
    if (computerChoice3 === 'Stone') {
        resultMag3 = 'computer won';
    } else if (computerChoice3 === 'paper') {
        resultMag3 = 'user won';
    } else if (computerChoice3 === 'scissors') {
        resultMag3 = `It's a Tie`;
    }
    alert(`You have chosen scissors. computer choice is ${computerChoice3} and ${resultMag3}`);
}