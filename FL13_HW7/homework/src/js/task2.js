let proposition = confirm('Do you want to play a game?');
if (proposition) {
    playGame();
} else {
    alert('You did not become a billionaire, but can.');
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function showWinAmount(winAmount) {
    alert('Congratulation, you won!   Your prize is: ' + winAmount + '$.')
}
function playGame() {
    let attemptPrize = new Map();
    const initialMin = 0;
    const initialMax = 5;
    const attempt1 = 1;
    const attempt2 = 2;
    const attempt3 = 3;
    const prize1 = 25;
    const prize2 = 50;
    const prize3 = 100;
        attemptPrize.set(attempt3, prize3)
        .set(attempt2, prize2)
        .set(attempt1, prize1);
        let winsCount = 0;
        let isPlaying = true;
        let totalPrize = 0;
        while (isPlaying) {
            let pickedNumber = getRandomIntInclusive(1 + initialMax * (winsCount + attempt1));
            let isWin;
            for (let i = attempt3; i > initialMin; i--) {
                let inputedNumber;
                let inputedValue = prompt(
                `Choose a roulette pocket number from  ${initialMin}  to  ${initialMax * (winsCount + attempt1)}
                attempts left: ${i} 
                total prize: ${totalPrize} 
                possible prize: ${attemptPrize.get(i) * Math.pow(attempt2, winsCount)}`);
                if (inputedValue !== null && inputedValue.length > 0) {
                        inputedNumber = Number(inputedValue);
                }
                if (inputedNumber === pickedNumber) {
                    let winAmount = attemptPrize.get(i) * Math.pow(attempt2, winsCount);
                    pickedNumber = getRandomIntInclusive(attempt1 + initialMax * (winsCount + attempt1));
                    totalPrize += winAmount;
                    winsCount++;
                    isWin = true;
                    break;
                }
            }
            if (isWin) {
                let isContinue = confirm(`Congratulation, you won! Your prize is:${totalPrize}$. Do you want to continue?`)
                if (isContinue) {
                    isPlaying = true;
                } else {
                    isPlaying = false;
                    alert(`Thank you for your participation. Your prize is:${totalPrize}$`);
                }
            } else {
                let playAgaine = confirm(`Thank you for your participation. Your prize is:
                    ${totalPrize}$. Do you want to play again?`);
                if (playAgaine) {
                    winsCount = 0;
                    playGame();
                } else {
                    isPlaying = false;
                }
            }
        }
}