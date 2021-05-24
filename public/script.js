/*
This sounds like game stuff
but that's just because it's what I am currently thinking about.
This is useful in every type of geometry.
And is the basis for algebra.
*/

//———————————————————————————————————————//
// To-Do's                               //
//———————————————————————————————————————//

// TODO 1. Make a health bar. ✅
// TODO 2. Give it a randomized defence percentage between 0-100. ✅
// TODO 3. Then do randomized damage to it, with that defense percentage taken out of it. ✅
// Completed

//———————————————————————————————————————//
// Variables                             //
//———————————————————————————————————————//

let health = document.getElementById("health-bar");

//———————————————————————————————————————//
// Functions                             //
//———————————————————————————————————————//

function getRandomInt(max) {
    return Math.ceil(Math.random() * max);
}

function damage() {
    let damage  = getRandomInt(100); // Randomized Damage
    let defence = getRandomInt(100) / 100; // Randomized Defense
    
    if (damage > 0) {
        health.value = Math.round(health.value - (damage * defence));
        console.log("Damage! Health is now: " + health.value);
    }
}

function heal() {
    health.value = 100;
    console.log("Healed! Health is now: " + health.value);
    return health.value;
}

function healthBar(button) {
    switch (button) {
        case 1:
            damage();
        break;

        case 2:
            heal();
        break;
    }
}