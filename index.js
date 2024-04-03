// Write your solution here!
//1.
const cats = ["Milo", "Otis", "Garfield"];

//2.
function destructivelyAppendCat() {
  cats.push("Ralph");
}

//3.
function destructivelyPrependCat() {
  cats.unshift("Bob");
}

//4.
function destructivelyRemoveLastCat() {
  cats.pop("Ralph");
}

//5.
function destructivelyRemoveFirstCat() {
  cats.shift("Bob");
}

//6.
let copyOfCats = [...cats];

function appendCat() {
  return (copyOfCats = [...cats, "Broom"]);
}
appendCat();

//7.
function prependCat() {
  return (copyOfCats = ["Arnold", ...cats]);
}
prependCat();

function removeLastCat() {
  copyOfCats.slice(4);
}
removeLastCat();

function removeFirstCat() {}

console.log(cats);
console.log(copyOfCats);
console.log(appendCat());
console.log(prependCat());
console.log(removeLastCat());
