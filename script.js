// For Loops

for (
    let i = 0; // Declares a variable that starts with 0
    i < 5; // Checks if variable is less than 5
    i++ // Adds the index + index to count an iteration (iteration=repetition)
    ) {
        console.log("Hello World!");
        console.log(i);

};

console.log("------------------------------------------");


for (let index = 0; index < 5; index++) {
    console.log("Hei Verden")
    console.log(index);
};

console.log("------------------------------------------");

// let greeting = "Hei Verden"
// let index1 = 0;
// let greeting = "Hei Verden"
// let index2 = 1;
// let greeting = "Hei Verden"
// let index3 = 2;
// let greeting = "Hei Verden"
// let index4 = 3;
// let greeting = "Hei Verden"
// let index5 = 4; 

// Oppgave: Lag en variabel som lagrer en basic array/flat array

const fruits = ["Apple", "Banana", "Coconut", "Mango"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

for (let index = 0; index < fruits.length; index++) {
    console.log(index);
    console.log(fruits[index]);
};

console.log("------------------------------------------"); // A divider for the console log for an easier overview of what code is console logged

// Oppgave: Lag en ny variabel som lagrer en basic array/flat array
//          Sett opp en 'for loop' som logger gjennom alle array elementene

const games = ["League of Legends", "Overwatch", "Crash Bandicot", "GTA 6", "The Last of Us"];

for (let index = 0; index < games.length; index++) {
    console.log(index)
    console.log(games[index]);
};

console.log("------------------------------------------");

const songs = ["Live not fantasize", "Catharsis", "5D", "Dirty Little Secret", "Slaughterhouse"];

for (let index = 0; index < songs.length; index++) {
    console.log(songs[index]);
};

console.log("------------------------------------------");

for (let index = 5; index > 0; index--) {
    console.log(index);
}

console.log("------------------------------------------");

// index++ er index = index + index
// index-- er index = index - index