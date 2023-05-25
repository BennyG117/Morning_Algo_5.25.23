


function tournamentWinner(competitions, results) {
    // 3 teams, three matches, results of each match
        // declare variable for winner
    
        let winners = [];

        //traverse results at the time of competitions
        //establish a count
        //teamHTML += 3;
        //teamC# += 3;
        //teamPython +=3;


        // check winners
        for (let i = 0; i < results.length; i++) {
            if (results[i] === 0) {
                winners.push(competitions[i][1]);
            }
            else {
                winners.push(competitions[i][0]);
            }
        }
// array of list of winners
//? winners.sort() = alphabetical order
//? for loop to iterate through list of order winners
//? winning team = HTML
//? winning teamcount ++
//? secondteam = C#
//? second team count ++
//? compare first and second winning team count higher count replace winning team and winning team count

// console.log(winners);

winners.sort();
let winningTeam = winners[0];
let winningCount = 3;
let secondTeam, secondCount = 0;
for (let i = 1; i < winners.length; i++) {
    if (winners[i] == winningTeam) {
        winningCount += 3;
    } //matched against non-winning team
    else if (secondTeam == undefined) { //only first itteration 
        secondTeam = winners[i];
        secondCount += 3;
    } //counting wins for second team
    else if (winners[i] == secondTeam){
        secondCount += 3;
    } //no longer matching second team
    else { //compare wins between winning teams
        if(secondCount > winningCount){
            winningCount = secondCount;
            winningTeam = secondTeam;
        } // replace second team new team
        secondTeam = winners[i];
        secondCount = 3;
    }
}
// console.log(secondCount);
//check last team against wining team
if(secondCount > winningCount){
    winningTeam = secondTeam;
}

// check array for which team won the most (use count?)

// if team 1 += 3;  (determine count x3 to determine final points?)

    return winningTeam; // winner
}


//declaring variable
let competitions = [
    ["HTML","C#"], 
    ["C#","Python"],
    ["Python","HTML"]
]
let results = [0, 0, 1];

console.log(tournamentWinner(competitions, results));

// let testCompetitions = [
//     ["A","C"], 
//     ["C","B"],
//     ["B","A"]
// ]
// let results = [0, 0, 1];

// console.log(tournamentWinner(testCompetitions, results));


// exports.tournamentWinner = tournamentWinner;
