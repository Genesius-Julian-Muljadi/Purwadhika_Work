/* Q:
Specifications :
Create a shooting game between two player
Each player has three properties : name, health and power
Each player will take turns to shooting
Before shooting, players get a chance to get random items (health +10 or power +10)
The game will continue until one of the players has health < 0
Requirements : 
Create ShootingGame & Player class
ShootingGame class : 
constructor(player1, player2) → player objects as a parameter
getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
start() → start shooting games
Player class :
Property → name, health (default 100), power (default 10)
hit(power) →  subtract player health
useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
ShootingGame start() function flow :
In every turn :
Show each player status before shooting
Get random item for each player before shooting
Show each player status after shooting
Show winner name
*/

class Player {
    readonly name: string;
    health: number = 100;
    power: number = 10;

    constructor (inputname: string, inputhealth?: number, inputpower?: number) {
        this.name = inputname;
        if (inputhealth) {
            this.health = inputhealth;
        };
        if (inputpower) {
            this.power = inputpower;
        };
    };

    hit(pow: number): void {
        this.health -= pow;
    };

    useItem(item: {
        health: number;
        power: number;
    }) {
        this.health += item.health;
        this.power += item.power;
    };

    get showStatus() {
        return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
    };
};

class ShootingGame {
    private p1: Player;
    private p2: Player;

    constructor (player1: Player, player2: Player) {
        this.p1 = player1;
        this.p2 = player2;
    };

    private getRandomItem() {
        return {
            health: Math.floor(Math.random() * 2) * 10,
            power: Math.floor(Math.random() * 2) * 10,
        };
    };

    get start() {
        let round: number = 1;
        let turn: number = 1;
        while (this.p1.health > 0 && this.p2.health > 0) {
            console.log(`Round ${round}: Player ${turn}`)
            console.log("Player 1: " + this.p1.showStatus);
            console.log("Player 2: " + this.p2.showStatus);

            if (turn === 1) {
                const r = this.getRandomItem();
                console.log(`${this.p1.name} gets ${r.health} health and ${r.power} power!`);
                this.p1.useItem(r);
                this.p2.hit(this.p1.power);
                console.log(`${this.p1.name} hits for ${this.p1.power} power!`)
            } else {
                const r = this.getRandomItem();
                console.log(`${this.p2.name} gets ${r.health} health and ${r.power} power!`);
                this.p2.useItem(r);
                this.p1.hit(this.p2.power);
                console.log(`${this.p2.name} hits for ${this.p2.power} power!`)
            };
            
            console.log(this.p1.showStatus);
            console.log(this.p2.showStatus);

            if (turn === 1) {
                turn++;
            } else {
                turn--;
                round++;
            };
        };

        if (this.p1.health <= 0 && this.p2.health > 0) {
            return `Winner: ${this.p2.name}`
        } else if (this.p1.health >= 0 && this.p2.health < 0){
            return `Winner: ${this.p1.name}`;
        } else {
            return "Draw";
        };
    };
};

const myp1: Player = new Player("\"Reckless\" Barry");
const myp2: Player = new Player("Cutthroat Dave", 125, 13);
const duel: ShootingGame = new ShootingGame(myp1, myp2);
console.log(duel.start);

// Let me know if you know the reference