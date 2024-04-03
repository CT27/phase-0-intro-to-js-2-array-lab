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

//8.
function removeFirstCat() {
  return cats.slice(1);
}
removeFirstCat();

//9.
function removeLastCat() {
  return cats.slice(0, -1);
}
removeLastCat();
