// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(newcatpost)   {
    cats.push(newcatpost);
}

let newcatpost = "Ralph"; 

function destructivelyPrependCat(newcatpre) {
    cats.unshift(newcatpre);
}

function destructivelyRemoveLastCat(lesscatpost) {
    cats.pop();
}
function destructivelyRemoveFirstCat(lesscatpre) {
    cats.shift();
}
let duplicats = [...cats];
function appendCat(newcatcrew) {  
    duplicats.push(newcatcrew);
    return duplicats;
}

let newcatcrew = "Broom";

let dupliduplicats = [...cats]
function prependCat(frontguardcat) {
    dupliduplicats.unshift(frontguardcat);
    return dupliduplicats;
};
let frontguardcat = "Arnold";


let backcatretirement = [... cats];
function removeLastCat(retiredcat) {
    backcatretirement.pop();
    return backcatretirement;
};

let frontcatretirement = [...cats];
function removeFirstCat(retiredcat) {
    frontcatretirement.shift();
    return frontcatretirement
};