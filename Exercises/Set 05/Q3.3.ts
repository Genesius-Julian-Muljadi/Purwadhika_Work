// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

// We will assume the random choice is uniformly random
// We will also assume ties will produce output 'Draw'

function rps(input: string) {
    const rpsval: Array<string> = ["rock", "paper", "scissors"];
    const rand: number = Math.floor(3 * Math.random());
    const pick: string = rpsval[rand];
    console.log(pick);  // Check output with Quokka

    let b: boolean = true;
    for (let i=0;i<rpsval.length;i++) {  // Check to ensure input value is rock, paper or scissors
        if (input === rpsval[i]) {
            b = false;
            break;
        } else continue;
    };

    if (b) {  // Return this if input is not rock, paper, nor scissors
        return "Please input \"rock\", \"paper\", or \"scissors\"."
    };

    if (input === "rock") {
        if (pick === "rock") {
            return "Draw";
        } else if (pick === "paper") {
            return "Lose";
        } else if (pick === "scissors") {
            return "Win";
        };
    } else if (input === "paper") {
        if (pick === "rock") {
            return "Win";
        } else if (pick === "paper") {
            return "Draw";
        } else if (pick === "scissors") {
            return "Lose";
        };
    } else if (input === "scissors") {
        if (pick === "rock") {
            return "Lose";
        } else if (pick === "paper") {
            return "Win";
        } else if (pick === "scissors") {
            return "Draw";
        };
    } else {
        console.log(input);
        return `Unexpected error: input received: ${input}`;
    };
};

console.log(rps("rock"));
console.log(rps("paper"));
console.log(rps("scissors"));
console.log(rps("Hello world!"));