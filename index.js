// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function  destructivelyAppendCat(Ralph) {
    cats.push(Ralph)
    return cats
}
function destructivelyPrependCat(Ralph) {
    cats.unshift(Ralph)
    return cats
}
function destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield)
    return cats
}
function destructivelyRemoveFirstCat(Ralph) {
    cats.shift(Ralph)
    return cats
}
function appendCat(name) {
    const Garfield= [...cats, name];
    return Garfield;
}
function prependCat(name) {
    const Ralph= [name, ...cats];
    return Ralph;
}
function removeLastCat(){
    const kitten= cats.slice(0,cats.length-1);
    return kitten
}
function removeFirstCat(){
    const kitten= cats.slice(1)
    return kitten
}