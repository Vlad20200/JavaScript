var userChoice = prompt("Help User!!!\nScissors cuts paper. Paper covers rock. Rock crushes lizard.\nLizard poisons Spock. Spock smashes scissors. Scissors decapitates lizard.\nLizard eats paper. Paper disproves Spock. Spock vaporizes rock. And as it always\nhas, rock crushes scissors.\n Do you choose rock, paper, scissors, lizard, or spock?");
var computerChoice = Math.random();
if (computerChoice <= 0.20) {
    computerChoice = "Rock";
} else if (computerChoice > 0.20 && computerChoice <= 0.40) {
    computerChoice = "Paper";
} else if (computerChoice > 0.40 && computerChoice <= 0.60) {
    computerChoice = "Scissors";
} else if (computerChoice > 0.60 && computerChoice <= 0.80) {
    computerChoice = "Lizard";
} else {
    computerChoice = "Spock";
}

console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);

//Validate user entry by comparing to valid choices
var compare = function (choice1, choice2) {
    //choice1 = userChoice
    choice1 = choice1.toLowerCase();
    //choice2 = computerChoice
    choice2 = choice2.toLowerCase();
    if (choice1 === "rock" || choice1 === "paper" || choice1 === "scissors" || choice1 === "lizard" || choice1 === "spock") {
        if (choice1 === choice2) {
            return "The result is a tie!";
        } else if (choice1 === "rock") {
            if (choice2 === "scissors" || choice2 === "lizard") {
                return choice1 + " wins";
            }
            return choice2 + " wins";
        } else if (choice1 === "paper") {
            if (choice2 === "rock" || choice2 === "spock") {
                return choice1 + " wins";
            }
            return choice2 + " wins";
        } else if (choice1 === "scissors") {
            if (choice2 === "paper" || choice2 === "lizard") {
                return choice1 + " wins";
            }
            return choice2 + " wins";
        } else if (choice1 === "lizard") {
            if (choice2 === "paper" || choice2 === "spock") {
                return choice1 + " wins";
            }
            return choice2 + " wins";
        } else if (choice1 === "spock") {
            if (choice2 === "rock" || choice2 === "scissors") {
                return choice1 + " wins";
            }
            return choice2 + " wins";
        }
    } else {
        return "Nice try but " + choice1 + " is not a valid option!";
    }
}
console.log(compare(userChoice, computerChoice));



