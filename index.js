#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\x1b[1m\x1b[36m"); // Set text to bold and cyan color
console.log("*******************************************");
console.log("*              Adventure Game             *");
console.log("*******************************************");
console.log("\x1b[0m"); // Reset text formatting
// Create Class for Player
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
// Create Class for Opponent
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "pname",
        type: "input",
        message: chalk.bold.gray("\nEnter Your Name:"),
    },
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.bold.cyan("\nSelect Your Opponent"),
        choices: [
            chalk.bold.greenBright("Skeleton"),
            chalk.bold.greenBright("Zombie"),
            chalk.bold.greenBright("Alien"),
            chalk.bold.redBright("EXIT..."),
        ],
    },
]);
// Data Gether
let p1 = new Player(player.pname);
let o1 = new Opponent(opponent.select);
// create do while loop
let condition = true;
do {
    // Skeleton
    if (opponent.select == chalk.bold.greenBright("Skeleton")) {
        let ask = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.bold.cyan("\nChoose your action!"),
                choices: ["Attack", "Drink Health Portion", "Run For Your Life..."],
            },
        ]);
        if (ask.select == "Attack") {
            let num1 = Math.floor(Math.random() * 2);
            if (num1 > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.yellowBright(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`\n${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red(`\n${player.pname} You Loose, Better Luck Next Time.\n`));
                    console.log("-".repeat(43));
                    process.exit();
                }
            }
            if (num1 <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.yellowBright(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`\n${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green(`\nCongratulations! ${player.pname} You Win.\n`));
                    console.log("-".repeat(43));
                    process.exit();
                }
            }
        }
        if (ask.select == "Drink Health Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`\n${player.pname} You Drink Health Portion, Now Your Fuel Is: ${p1.fuel}`));
        }
        if (ask.select == "Run For Your Life...") {
            console.log(chalk.bold.red(`\n${player.pname} You Loose , Better Luck Next Time\n`));
            console.log("-".repeat(43));
            process.exit();
        }
    }
    ;
    // Zombie
    if (opponent.select == chalk.bold.greenBright("Zombie")) {
        let ask = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.bold.cyan("\nChoose your action!"),
                choices: ["Attack", "Drink Health Portion", "Run For Your Life..."],
            },
        ]);
        if (ask.select == "Attack") {
            let num2 = Math.floor(Math.random() * 2);
            if (num2 > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.yellowBright(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`\n${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red(`\n${player.pname} You Loose, Better Luck Next Time\n`));
                    console.log("-".repeat(43));
                    process.exit();
                }
            }
            if (num2 <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.yellowBright(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`\n${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green(`\nCongratulations! ${player.pname} You Win\n`));
                    console.log("-".repeat(43));
                    process.exit();
                }
            }
        }
        if (ask.select == "Drink Health Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`\n${player.pname} You Drink Health Portion, Now Your Fuel Is: ${p1.fuel}`));
        }
        if (ask.select == "Run For Your Life...") {
            console.log(chalk.bold.red(`\n${player.pname} You Loose , Better Luck Next Time\n`));
            console.log("-".repeat(43));
            process.exit();
        }
    }
    ;
    //Alien
    if (opponent.select == chalk.bold.greenBright("Alien")) {
        let ask = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: chalk.bold.cyan("\nChoose your action!"),
                choices: ["Attack", "Drink Health Portion", "Run For Your Life..."],
            },
        ]);
        if (ask.select == "Attack") {
            let num3 = Math.floor(Math.random() * 2);
            if (num3 > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.yellowBright(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`\n${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.bold.red(`\n${player.pname} You Loose, Better Luck Next Time\n`));
                    console.log("-".repeat(43));
                    process.exit();
                }
            }
            if (num3 <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.yellowBright(`\n${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.greenBright(`\n${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.bold.green(`\nCongratulations! ${player.pname} You Win\n`));
                    console.log("-".repeat(43));
                    process.exit();
                }
            }
        }
        if (ask.select == "Drink Health Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.green(`\n${player.pname} You Drink Health Portion, Now Your Fuel Is: ${p1.fuel}`));
        }
        if (ask.select == "Run For Your Life...") {
            console.log(chalk.bold.red(`\n${player.pname} You Loose , Better Luck Next Time\n`));
            console.log("-".repeat(43));
            process.exit();
        }
    }
    if (opponent.select === chalk.bold.redBright("EXIT...")) {
        console.log("\nExiting the game...");
        console.log("-".repeat(43));
        process.exit();
    }
} while (condition);
//"tsc && node index.js" command use to RUN on terminal
