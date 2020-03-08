(function (){
    ////////////////////////// Constructor Functions
var Player = function (name, lastName, number, img) {
    this.name = name;
    this.lastName = lastName;
    this.number = number;
    this.img = img;

}
//////////////////////////////// Random Number Generator From 1 to Limit
var randomNumber = function (limit) {
    // return Math.round((array.length - 1 - 1) * Math.random() + 1);
    console.log(limit + 'This is Limit');
    var numero = Math.round((limit - 1) * Math.random());
    console.log(numero + 'This is some numbers');
    return numero;
    ;
}

//////////////////////// Player Node Creation
function playerNodeMaker(team, someNumber, div) {
    var profileImg = document.createElement('img');
    profileImg.setAttribute('src', team[someNumber].img);

    var name = document.createElement('p');
    name.textContent = team[someNumber].name + ' ' + team[someNumber].lastName;

    var number = document.createElement('p');
    number.textContent = team[someNumber].number;

    var playerDiv = document.createElement('div');
    playerDiv.className = "player";
    playerDiv.appendChild(profileImg);
    playerDiv.appendChild(name);
    playerDiv.appendChild(number);
    div.appendChild(playerDiv);
    team.splice(someNumber, 1);
}
//////////////////////////////////Random splitter function
function randomPlacement(team) {
    var firstTeam = document.querySelector('.firsteleven');
    var secondTeam = document.querySelector('.reserves');
    while (team.length) {
        var someNumber = randomNumber(team.length);
        console.log(team.length);
        if (team.length > 4) {
            playerNodeMaker(team, someNumber, firstTeam);

        }
        else {
            playerNodeMaker(team, someNumber, secondTeam);


        }
    }

}
//////////////////////////// Random player node switcher function
function switchPlayers() {
    var firstTeam = document.querySelector('.firsteleven');
    var secondTeam = document.querySelector('.reserves');
    var firstShift = firstTeam.querySelectorAll('.player');
    var bench = secondTeam.querySelectorAll('.player');

    var firstShiftNumber = randomNumber(firstShift.length);
    var benchNumber = randomNumber(bench.length);

    var firstPlayer = firstShift[firstShiftNumber];
    var benchPlayer = bench[benchNumber];

    var prevBenchPlayer = benchPlayer.previousSibling;
    var nextBenchPlayer = benchPlayer.nextSibling;

    firstPlayer.before(benchPlayer);
    prevBenchPlayer ? prevBenchPlayer.after(firstPlayer) : nextBenchPlayer.before(firstPlayer);
}
////////////////////////// Player Objects Creation
var MilanBorjan = new Player("Milan", "Borjan", 1, "images/Borjan.png");
var MilosDegenek = new Player("Milos", "Degenek", 2, "images/Degenek.png");
var ZeljkoGavric = new Player("Zeljko", "Gavric", 3, "images/Gavric.png");
var MarkoGobeljic = new Player("Marko", "Gobeljic", 4, "images/Gobeljic.png");
var DusanJovancic = new Player("Dusan", "Jovancic", 5, "images/Jovancic.png");
var BrankoJovicic = new Player("Branko", "Jovicic", 6, "images/Jovicic.png");
var MarkoNikolic = new Player("Marko", "Nikolic", 7, "images/Nikolic.png");
var RadovanPankov = new Player("Radovan", "Pankov", 8, "images/Pankov.png");
var MilanPavkov = new Player("Milan", "Pavkov", 9, "images/Pavkov.png");
var NjegosPetrovic = new Player("Njegos", "Petrovic", 10, "images/Njegos.png");
var MilanRodic = new Player("Milan", "Rodic", 11, "images/Rodic.png");
var AleksaVukanovic = new Player("Aleksa", "Vukanovic", 12, "images/Vukanovic.png");
var MilanVulic = new Player("Milan", "Vulic", 13, "images/Vulic.png");
var RicmondBoaci = new Player("Ricmond", "Boaci", 14, "images/Boaci.png");
var NikolaPopovic = new Player("Nikola", "Popovic", 15, "images/Popovic.png");

var team = []; //// Array of Players
team.push(MilanBorjan, MilosDegenek, ZeljkoGavric, MarkoGobeljic, DusanJovancic, BrankoJovicic, MarkoNikolic, RadovanPankov, MilanPavkov, NjegosPetrovic, MilanRodic, AleksaVukanovic, MilanVulic, RicmondBoaci, NikolaPopovic);
console.log("Just a check to see if Array of players has been created succesfully : \n"+ team );


randomPlacement(team);

setInterval(switchPlayers, 3000);
})();