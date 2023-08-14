const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

const intro = document.getElementById("intro");
const results = document.getElementById("results");
const resultsPlus = document.getElementById("resultsPlus");

//Daily Lotto
let dailyQP = [];
for(let i = 1; i < 6; i++) {
  dailyQP.push(Math.floor(Math.random() * 36));
};

let drawDailyLottoQP = dailyQP.filter((item, index) => 
dailyQP.indexOf(item) === index);

let dailyLottoMostFrequent = [ 6, 10, 25, 5, 12, 12, 9, 27, 22, 15, 32, 29, 36, 14, 2, 21, 1, 28, 24 ];
let drawDailyLottoMostFrequent = dailyLottoMostFrequent.sort(() => Math.random() - Math.random()).slice(0, 5);

let dailyLottoLeastFrequent = [ 17, 3, 11, 16, 7, 26, 13, 19, 35, 31, 30, 4, 8, 33, 20, 18, 23, 34 ];
let drawDailyLottoLeastFrequent = dailyLottoLeastFrequent.sort(() => Math.random() - Math.random()).slice(0, 5);

//Regular Lotto
let regularQP = [];
for(let i = 1; i < 7; i++) {
  regularQP.push(Math.floor(Math.random() * 52));
};

let drawregularLottoQP = regularQP.filter((item, index) => 
regularQP.indexOf(item) === index);

let regularLottoMostFrequent = [ 14, 1, 46, 49, 11, 48, 42, 13, 45, 50, 23, 29, 26, 6, 18, 2, 10, 35 ];
let drawRegularLottoMostFrequent = regularLottoMostFrequent.sort(() => Math.random() - Math.random()).slice(0, 5);

let regularLottoMostFrequentBB = [ 22, 19, 16, 29, 39, 2, 24, 31, 45, 47, 35, 5, 14, 17, 20, 52, 30, 8 ];
let drawRegularLottoMostFrequentBB = regularLottoMostFrequentBB.sort(() => Math.random() - Math.random()).slice(0, 1);

let regularLottoLeastFrequent = [ 11, 48, 23, 30, 8, 2, 14, 46, 17, 44, 24, 33, 6, 11, 29, 1, 43, 39 ];
let drawRegularLottoLeastFrequent = regularLottoLeastFrequent.sort(() => Math.random() - Math.random()).slice(0, 5);

let regularLottoLeastFrequentBB = [ 22, 19, 16, 29, 39, 2, 24, 31, 45, 47, 35,5, 14, 17, 20, 52, 30, 8 ];
let drawRegularLottoBBLeastFrequent = regularLottoLeastFrequentBB.sort(() => Math.random() - Math.random()).slice(0, 1);

//Powerbal
let powerBallQP = [];
for(let i = 1; i < 7; i++) {
  powerBallQP.push(Math.floor(Math.random() * 52));
};

let drawPowerball = powerBallQP.filter((item, index) => 
powerBallQP.indexOf(item) === index);

//ActualPowerball
let actualPowerballQP = [];
for(let i = 1; i < 2; i++) {
  actualPowerballQP.push(Math.floor(Math.random() * 20));
};

let drawActualPowerballQP = actualPowerballQP.filter((item, index) => 
actualPowerballQP.indexOf(item) === index);

let powerBallMostFrequent = [  15, 24, 12, 20, 31, 31, 11, 35, 43, 28, 34, 9, 36, 7, 8, 13, 42, 3, 41 ];
let drawPowerBallMostFrequent = powerBallMostFrequent.sort(() => Math.random() - Math.random()).slice(0, 5);

let powerBallMostFrequentPB = [ 13, 3, 16, 18, 12, 5, 17, 2, 9, 15, 11, 10, 4, 20, 6, 7, 1, 14 ];
let drawPowerBallMostFrequentPB = powerBallMostFrequentPB.sort(() => Math.random() - Math.random()).slice(0, 1);

let powerBallLeastFrequent = [ 47, 46, 48, 50, 49, 33, 39, 27, 2, 25, 30, 32, 17, 23, 14, 44, 5, 26 ];
let drawPowerBallLeastFrequent = powerBallLeastFrequent.sort(() => Math.random() - Math.random()).slice(0, 5);

let powerBallLeastFrequentPB = [ 20, 10, 7, 14, 1, 3, 17, 19, 4, 9, 8, 6, 18, 5, 15, 11, 13, 12 ];
let drawPowerBallLeastFrequentPB = powerBallLeastFrequentPB.sort(() => Math.random() - Math.random()).slice(0, 1);

//let somethings = dailyLLeastFrequent.sort(() => Math.random() - Math.random()).slice(0, 5)

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

    one.innerText = "Daily Lotto";
    two.innerText = "Regular Lotto";
    three.innerText = "Powerball";

    document.getElementById("three").hidden = false;
    document.getElementById("four").hidden = true;
    document.getElementById("five").hidden = true;
};

function no() {
    intro.innerText = "You can't win if you don't play."

    document.getElementById("one").hidden = true;
    document.getElementById("two").hidden = true;
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
    //four.onclick = previous;
    //five.onclick = backHome;
};

function dailyLottoQP() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Lotto Quick Pick numbers are:" + " " + drawDailyLottoQP;
    

    //four.onclcik = "";
    //five.onclick = "";
};

function dailyLottoMC() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Lotto Most Common numbers are:" + " " + drawDailyLottoMostFrequent;

    //four.onclcik = "";
    //five.onclick = "";
};

function dailyLottoLC() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Lotto Least Common numbers are:" + " " + drawDailyLottoLeastFrequent;

    //four.onclcik = "";
    //five.onclick = "";
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
    results.innerText = "Your Lotto Quick Pick numbers are:" + " " + drawregularLottoQP;

    //four.onclcik = "";
    //five.onclick = "";
};

function regularLottoMC() {
    showThese()
    hideThese();
    results.innerText = "Your Lotto Most Common numbers are:" + " " + drawRegularLottoMostFrequent + " " + "And your Bonus Ball is:" + " " + drawRegularLottoMostFrequentBB;

    //four.onclick = "";
    //five.onclick = "";
};

function regularLottoLC() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Least Common numbers are:" + " " + drawRegularLottoLeastFrequent + " " + "And your Bonus Ball is:" + " " + drawRegularLottoBBLeastFrequent;

    //four.onclick = "";
    //five.onclick = "";
};


function powerball() {
    one.innerText = "Quick Pick";
    two.innerText = "Most Common";
    three.innerText = "Least Common";
    four.innerText = "Previous";

    one.onclick = powerballQP;
    two.onclick = powerballMC;
    three.onclick = powerballLC;
    //four.onclick = previous;
    five.onclick = backHome;
};

function powerballQP() {
    showThese()
    hideThese();
    results.innerText = "Your Powerball Quick Pick numbers are: " + drawPowerball + " " + "And the powerball is: " + drawActualPowerballQP;

    //four.onclcik = "";
    //five.onclick = "";
};

function powerballMC() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Least Common numbers are: " + drawPowerBallMostFrequent + " " + "And your Powerball is: " + drawPowerBallMostFrequentPB;
    //five.onclick;
};

function powerballLC() {
    showThese()
    hideThese();
    results.innerText = "Your Daily Least Common numbers are: " + drawPowerBallLeastFrequent + " " + "And your Powerball is: " + drawPowerBallLeastFrequentPB;
};


/*function previous() {
    window.history.go(-1)
};*/

function backHome() {
    location.reload()
    //window.location.reload()
    //document.location.reload()
};