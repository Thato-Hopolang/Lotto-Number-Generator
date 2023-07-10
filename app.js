const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

const intro = document.getElementById("intro");
const results = document.getElementById("results");
const resultsPlus = document.getElementById("resultsPlus");

let dailyLLeastFrequent = [ 17, 3, 11, 16, 7, 26, 13, 19, 35, 31, 30, 4, 8, 33, 20, 18, 23, 34 ];
let dailyLMostFrequent = [ 6, 10, 25, 5, 12, 12, 9, 27, 22, 15, 32, 29, 36, 14, 2, 21, 1, 28, 24 ];

let reglarLLeastFrequent = [ 11, 48, 23, 30, 8, 2, 14, 46, 17, 44, 24, 33, 6, 11, 29, 1, 43, 39 ];
let reglarLLeastFrequentBB = [ 22, 19, 16, 29, 39, 2, 24, 31, 45, 47, 35,5, 14, 17, 20, 52, 30, 8 ];
let regularLMostFrequent = [ 14, 1, 46, 49, 11, 48, 42, 13, 45, 50, 23, 29, 26, 6, 18, 2, 10, 35 ];
let regularLMostFrequentBB = [ 22, 19, 16, 29, 39, 2, 24, 31, 45, 47, 35, 5, 14, 17, 20, 52, 30, 8 ];

let powerBLeastFrequent = [ 47, 46, 48, 50, 49, 33, 39, 27, 2, 25, 30, 32, 17, 23, 14, 44, 5, 26 ];
let powerBLeastFrequentBB = [ 20, 10, 7, 14, 1, 3, 17, 19, 4, 9, 8, 6, 18, 5, 15, 11, 13, 12 ];
let powerBMostFrequent = [  15, 24, 12, 20, 31, 31, 11, 35, 43, 28, 34, 9, 36, 7, 8, 13, 42, 3, 41 ];
let powerBMostFrequentBB = [ 13, 3, 16, 18, 12, 5, 17, 2, 9, 15, 11, 10, 4, 20, 6, 7, 1, 14 ];

let dailyQP = [];
for(let i = 0; i < 5; i++) {
  dailyQP.push(Math.floor(Math.random() * 36));
};

let regularQP = [];
for(let i = 0; i < 6; i++) {
  regularQP.push(Math.floor(Math.random() * 52));
};

let powerBallQP = [];
for(let i = 0; i < 5; i++) {
  powerBallQP.push(Math.floor(Math.random() * 50));
};

let actualpowerballQP = [];
for(let i = 0; i < 1; i++) {
  actualpowerballQP.push(Math.floor(Math.random() * 20));
};

// Daily Lotto

//dailyLottoLF
let x = dailyLLeastFrequent[Math.floor(Math.random() * (dailyLLeastFrequent.length))];
let x1 = dailyLLeastFrequent[Math.floor(Math.random() * (dailyLLeastFrequent.length))];
let x2 = dailyLLeastFrequent[Math.floor(Math.random() * (dailyLLeastFrequent.length))];
let x3 = dailyLLeastFrequent[Math.floor(Math.random() * (dailyLLeastFrequent.length))];
let x4 = dailyLLeastFrequent[Math.floor(Math.random() * (dailyLLeastFrequent.length))];

//dailyLottoMF
let b = dailyLMostFrequent[Math.floor(Math.random() * (dailyLMostFrequent.length))];
let b1 = dailyLMostFrequent[Math.floor(Math.random() * (dailyLMostFrequent.length))];
let b2 = dailyLMostFrequent[Math.floor(Math.random() * (dailyLMostFrequent.length))];
let b3 = dailyLMostFrequent[Math.floor(Math.random() * (dailyLMostFrequent.length))];
let b4 = dailyLMostFrequent[Math.floor(Math.random() * (dailyLMostFrequent.length))];

// Regular Lotto

//Least Frequent
let q = reglarLLeastFrequent[Math.floor(Math.random() * (reglarLLeastFrequent.length))];
let q1 = reglarLLeastFrequent[Math.floor(Math.random() * (reglarLLeastFrequent.length))];
let q2 = reglarLLeastFrequent[Math.floor(Math.random() * (reglarLLeastFrequent.length))];
let q3 = reglarLLeastFrequent[Math.floor(Math.random() * (reglarLLeastFrequent.length))];
let q4 = reglarLLeastFrequent[Math.floor(Math.random() * (reglarLLeastFrequent.length))];
let q5 = reglarLLeastFrequent[Math.floor(Math.random() * (reglarLLeastFrequent.length))];

let qq = reglarLLeastFrequentBB[Math.floor(Math.random() * (reglarLLeastFrequentBB.length))];

//Most Frequent
let z = regularLMostFrequent[Math.floor(Math.random() * (regularLMostFrequent.length))];
let z1 = regularLMostFrequent[Math.floor(Math.random() * (regularLMostFrequent.length))];
let z2 = regularLMostFrequent[Math.floor(Math.random() * (regularLMostFrequent.length))];
let z3 = regularLMostFrequent[Math.floor(Math.random() * (regularLMostFrequent.length))];
let z4 = regularLMostFrequent[Math.floor(Math.random() * (regularLMostFrequent.length))];
let z5 = regularLMostFrequent[Math.floor(Math.random() * (regularLMostFrequent.length))];

let zz = regularLMostFrequentBB[Math.floor(Math.random() * (regularLMostFrequentBB.length))];

//Powerball

//Least Frequent
let m = powerBLeastFrequent[Math.floor(Math.random() * (powerBLeastFrequent.length))];
let m1 = powerBLeastFrequent[Math.floor(Math.random() * (powerBLeastFrequent.length))];
let m2 = powerBLeastFrequent[Math.floor(Math.random() * (powerBLeastFrequent.length))];
let m3 = powerBLeastFrequent[Math.floor(Math.random() * (powerBLeastFrequent.length))];
let m4 = powerBLeastFrequent[Math.floor(Math.random() * (powerBLeastFrequent.length))];

let mm = powerBLeastFrequentBB[Math.floor(Math.random() * (powerBLeastFrequentBB.length))];

//Most Frequent
let n = powerBMostFrequent[Math.floor(Math.random() * (powerBMostFrequent.length))];
let n1 = powerBMostFrequent[Math.floor(Math.random() * (powerBMostFrequent.length))];
let n2 = powerBMostFrequent[Math.floor(Math.random() * (powerBMostFrequent.length))];
let n3 = powerBMostFrequent[Math.floor(Math.random() * (powerBMostFrequent.length))];
let n4 = powerBMostFrequent[Math.floor(Math.random() * (powerBMostFrequent.length))];

let nn = powerBMostFrequentBB[Math.floor(Math.random() * (powerBMostFrequentBB.length))];

document.getElementById("three").hidden = true;
document.getElementById("four").hidden = true;
document.getElementById("five").hidden = true;

intro.innerText = "Are you feeling lucky?";

one.innerText = "Yes"
two.innerText = "No"

one.onclick = yes;
two.onclick = no;

function yes() {

    intro.innerText = "What do you want to play?";

    one.onclick = dailyLotto;
    two.onclick = regularLotto;
    three.onclick = powerball;
    four.onclick = previous;
    five.onclick = backHome;

    one.innerText = "Daily Lotto";
    two.innerText = "Regular Lotto";
    three.innerText = "Powerball";
    //four.innerText = "Previous";

    document.getElementById("three").hidden = false;
    document.getElementById("four").hidden = true;
    document.getElementById("five").hidden = true;
};

function no() {
    intro.innerText = "You can't win if you don't play."

    document.getElementById("one").hidden = true;
    document.getElementById("two").hidden = true;
};

function showThese() {
    document.getElementById("four").hidden = false;
    document.getElementById("five").hidden = false;
};

function hideThese() {
    document.getElementById("one").hidden = true;
    document.getElementById("two").hidden = true;
    document.getElementById("three").hidden = true;
    document.getElementById("intro").hidden = true;
};

function dailyLotto() {
    one.innerText = "Quick Pick";
    two.innerText = "Most Common";
    three.innerText = "Least Common";
    four.innerText = "Previous";

    intro.innerText = "Pick the type of numbers you'd like generated.";

    one.onclick = dailyLottoQP;
    two.onclick = dailyLottoMC;
    three.onclick = dailyLottoLC;
    four.onclick = previous;
    five.onclick = backHome;
};

function dailyLottoQP() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Lotto Quick Pick numbers are:" + " " + dailyQP; 
};

function dailyLottoMC() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Most Common numbers are:" + " " + b + ", " + b1 + ", " + b2 + ", " + b3 + ", " + b4;
};

function dailyLottoLC() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Least Common numbers are:" + " " + x + ", " + x1 + ", " + x2 + ", " + x3 + ", " + x4;
};

function regularLotto() {
    one.innerText = "Quick Pick";
    two.innerText = "Most Common";
    three.innerText = "Least Common";
    four.innerText = "Previous";

    one.onclick = regularLottoQP;
    two.onclick = regularLottoMC;
    three.onclick = regularLottoMC;
    four.onclick = previous;
    five.onclick = backHome;
};

function regularLottoQP() {
    showThese()
    hideThese();
    results.innerText = "Your Lotto Quick Pick numbers are:" + " " + regularQP; 
};

function regularLottoMC() {
    showThese()
    hideThese();
    results.innerText = "Your Lotto Most Common numbers are:" + " " + z + ", " + z1 + ", " + z2 + ", " + z3 + ", " + z4 + ", " + z5 + " " + "And your Bonus Ball is:" + " " + zz;
};

function regularLottoLC() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Least Common numbers are:" + " " + q + ", " + q1 + ", " + q2 + ", " + q3 + ", " + q4 + ", " + q5 + " " + "And your Bonus Ball is:" + " " + qq;
};


function powerball() {
    one.innerText = "Quick Pick";
    two.innerText = "Most Common";
    three.innerText = "Least Common";
    four.innerText = "Previous";

    one.onclick = powerballQP;
    two.onclick = powerballMC;
    three.onclick = powerballLC;
    four.onclick = previous;
    five.onclick = backHome;
};

function powerballQP() {
    showThese()
    hideThese();
    results.innerText = "Your Powerball Quick Pick numbers are:" + " " + powerBallQP + " " + "And the powerball is:" + " " + actualpowerballQP; 
};

function powerballMC() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Least Common numbers are:" + " " + n + ", " + n1 + ", " + n2 + ", " + n3 + ", " + n4 + " " + "And your Powerball is:" + " " + nn;
};

function powerballLC() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Least Common numbers are:" + " " + m + ", " + m1 + ", " + m2 + ", " + m3 + ", " + m4 + " " + "And your Powerball is:" + " " + mm;
};


function previous() {
    window.history.go(-1)
};

function backHome() {
    yes()

    document.getElementById("one").hidden = false;
    document.getElementById("two").hidden = false;
    document.getElementById("results").hidden = true;
};

function generateNew() {};