import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

// Global vars

// Races

class Human {

    constructor(id, race, name, level, exp, hp, str, int, dex, patk, pdef){
    this.id = Number(id);
    this.race = String(race);
    this.name = String(name);
    this.level = Number(level);
    this.exp = Number(exp);
    this.hp = Number(hp);
    this.str = Number(str);
    this.int = Number(int);
    this.dex = Number(dex);
    this.patk = Number(patk);
    this.pdef = Number(pdef);
    }
    // Human funcs
    displayStats() {
        console.log("id:"+ this.id + "race:" + this.race, "name: " + this.name + "level " + this.level);        
        console.log("hp:" + this.hp + "str:" + this.str + "int:" + this.int + "dex" + this.dex + "phy atk:" + this.patk + "phy def" + this.pdef);
    }
    showDescription() {
        console.log ("a human");
    }

}

class Wizard extends Human {
    constructor(matk, mdef){
    this.race = String(race);
    this.name = String("Wizard");
    this.matk = Number(matk);
    this.mdef = Numebr(mdef);

    }
    
    displayStats() {
        console.log("id:"+ this.id + "race:" + this.race, "name: " + this.name + "level " + this.level);        
        console.log("hp:" + this.hp + "str:" + this.str + "int:" + this.int + "dex" + this.dex + "mag atk:" + this.matk + "mag def" + this.mdef);
    }
    showDescription() {
        console.log ("a human wizard");
    }

}

const playerOne = new Human("1", "Human", "Player One", 1, 1, 1000, 20, 8, 12, 100, 100);

// Global functions

function addExp(){
    var expPoints = 1;
    if (playerOne.level > 1){
        expPoints++ + playerOne.exp;
    }
    else {
        expPoints = 0;
    }
}

function levelUp(){
    if (playerOne.exp === 1000){
        playerOne.level++
    }
    else
        playerOne.level = playerOne.level;
}

function phyAttack(){
    var calcPhyAtk =  playerOne.str * playerOne.dex + playerOne.patk;
    return calcPhyAtk;
}

// game menu


// HTML Console

const consoleElement = document.getElementById('console');
const inputBox = document.getElementById('inputBox');

inputBox.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const command = inputBox.value;
        consoleElement.innerHTML += `<div>$ ${command}</div>`;
        inputBox.value = '';
        // logic here
        if (command === "start"){
            consoleElement.innerHTML += `<div>$ ${"start game"}</div>`;
        }
        else if (command === "stats"){
            consoleElement.innerHTML += `<div>$ race: ${playerOne.race}</div>`;
            consoleElement.innerHTML += `<div>$ level: ${playerOne.level}</div>`;
            consoleElement.innerHTML += `<div>$ exp: ${playerOne.exp}</div>`;
            consoleElement.innerHTML += `<div>$ hp: ${playerOne.hp}</div>`;
            consoleElement.innerHTML += `<div>$ str: ${playerOne.str}</div>`;
            consoleElement.innerHTML += `<div>$ dex: ${playerOne.dex}</div>`;
            consoleElement.innerHTML += `<div>$ patk: ${playerOne.patk}</div>`;
            consoleElement.innerHTML += `<div>$ pdef: ${playerOne.pdef}</div>`;
        }
        else if (command === "clear"){
            consoleElement.innerHTML = ''; // clears the console element
        }
        else if (command === "attack"){
            
        }
        else {
            consoleElement.innerHTML += `<div>$ ${"invalid command"}</div>`;
        }
    }
});