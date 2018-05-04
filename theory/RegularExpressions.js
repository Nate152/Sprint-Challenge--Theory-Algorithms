const antelopeHunter = /antelopes?/;

const antelope = "antelope rock out";
const antelopeHerd = "antelopes rock out";

console.log(antelopeHunter.exec(antelope));
console.log(antelopeHunter.exec(antelopeHerd));

const goatMoater = /[gm]oat/;

console.log(goatMoater.exec("It's hard to herd goats"));
console.log(goatMoater.exec("Across lava-filled moats"));
console.log(goatMoater.exec("Cause they eat up the boats and they fall out."));

const dateHunter = /\d\d?\d?\d?-\d\d?-\d\d?/g;

const datebook = "Birthday: 1994-12-13, wife's birthday: 1994-6-14, wedding day: 2014-5-6"

let dateFound = dateHunter.exec(datebook);
while (dateFound !== null) {
  console.log(dateFound);
  dateFound = dateHunter.exec(datebook);
};

const vt100Cursor = /\e\[(\d+);(\d+)f/g;
const vt100Bold = /\e\[1m/;

const cursorCommands = "\e[875;213f  kjhgf de \e12;12f0 \e[1;2f";
let cursorCommandFound = vt100Cursor.exec(cursorCommands);
while (cursorCommandFound !== null) {
  console.log(cursorCommandFound);
  cursorCommandFound = vt100Cursor.exec(cursorCommands);
};