
function tournamentWinner(competitions, results) {
    let winners = [];

    for (let i = 0; i < results.length; i++) {
        if (results[i] === 0) {
            winners.push(competitions[i][1]);
        }
        else {
            winners.push(competitions[i][0]);
        }
    }
    winners.sort();
    let winningTeam = winners[0];
    let winningCount = 3;
    let secondTeam, secondCount = 0;
    for (let i = 1; i < winners.length; i++) {
        if (winners[i] == winningTeam) {
            winningCount += 3;
        }
        else if (secondTeam == undefined) {
            secondTeam = winners[i];
            secondCount += 3;
        }
        else if (winners[i] == secondTeam) {
            secondCount += 3;
        }
        else {
            if (secondCount > winningCount) {
                winningCount = secondCount;
                winningTeam = secondTeam;
            }
            secondTeam = winners[i];
            secondCount = 3;
        }
    }
    if (secondCount > winningCount) {
        winningTeam = secondTeam;
    }
    return winningTeam;
}
let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]
let results = [0, 0, 1];

console.log(tournamentWinner(competitions, results));

