/*var clock = document.querySelector("#clock");
var wordGrid = document.querySelector("#word-grid").getElementsByTagName("li");
var d = new Date();
var curTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var h = d.getHours();
var m = d.getMinutes();
// var m = 10;
// var h = 0;

var minSelList = [21 ,3, 1, 5, 2, 2, 6, 2, 2, 5, 1, 3];
var minSel;

// ----------------- Minutes -------------- //

function minSelSelector (m) {
    minSel = Math.floor(m/5);
}

minSelSelector(m);

console.log(minSel);


function activeMinute (minSel) {
  wordGrid[minSel].classList.add("active");
}

activeMinute(minSelList[minSel]);

// --- append

// --------- make the exception words active

if (minSel == 1 || minSel == 2 || minSel == 4 || minSel == 5 || minSel == 7 || minSel == 8 || minSel == 10 || minSel == 11) {
  wordGrid[4].classList.add("active");
} else {
  wordGrid[4].classList.add("inactive");
}

if (minSel == 5 || minSel == 7) {
  if (minSel == 5 || minSel == 7) {
    wordGrid[3].classList.add("active");
  } else {
    wordGrid[3].classList.add("inactive");
  }
}

// ----------------- Hours ---------///
function activeHour(h) {
  wordGrid[h].classList.add("active") ;
}

if (h > 13) {
  activeHour(h - 4);
} else if (h == 0) {
  activeHour(20);
}
else {
  activeHour(h + 8);
}


// ----------------- To Past ---------///

// 7 = past 8 =to

if (m > 34) {
  wordGrid[8].classList.add("active") ;
  wordGrid[7].classList.add("inactive") ;
} else if ( m > 0 ) {
  wordGrid[7].classList.add("active") ;
  wordGrid[8].classList.add("inactive") ;
}
else {
  wordGrid[7].classList.add("inactive") ;
  wordGrid[8].classList.add("inactive") ;
}
*/


----------------------------------


// ItAistenBZtwentyUfiveYminutesKaBquarterXhalfIpastQtoEoneJtwoVthreeRfourfiveGLsixEsevenReightnineSteneleventwelveoXclock
// ITAISTENBZTWENTYUFIVEYMINUTESKABQUARTERXHALFIPASTQTOEONEJTWOVTHREERFOURFIVEGLSIXESEVENREIGHTNINESTENELEVENTWELVEOXCLOCK

/*
obj = {
b: 0,
e: 1,
  activate: function(b, e) {
    for (i = b; i < e; i++){
      wordGridTwoItems[i].classList.add("active");
    }
  }
};
*/


// ------------ WORKING STUFF DOWN HERE

//------------ element selectors
var minSelList = [21 ,3, 1, 5, 2, 2, 6, 2, 2, 5, 1, 3];
var minSel = Math.floor(m/5);
// var hourSelList = [];



// ----------------- To Past ---------///

// 7 = past 8 =to

if (m > 34) {
  wordGrid[8].classList.add("active") ;
  wordGrid[7].classList.add("inactive") ;

  h = h + 1;
} else if ( m > 0 ) {
  wordGrid[7].classList.add("active") ;
  wordGrid[8].classList.add("inactive") ;
}
else {
  wordGrid[7].classList.add("inactive") ;
  wordGrid[8].classList.add("inactive") ;
}

// ----------------- Minutes -------------- //




 // console.log(wordGridTwo);


function activeMinute (minSel) {
  wordGrid[minSel].classList.add("active");
}

activeMinute(minSelList[minSel]);


// --------- make the exception word active

if (minSel == 1 || minSel == 2 || minSel == 4 || minSel == 5 || minSel == 7 || minSel == 8 || minSel == 10 || minSel == 11) {
  wordGrid[4].classList.add("active");
} else {
  wordGrid[4].classList.add("inactive");
}

if (minSel == 5 || minSel == 7) {
  if (minSel == 5 || minSel == 7) {
    wordGrid[3].classList.add("active");
  } else {
    wordGrid[3].classList.add("inactive");
  }
}

// ----------------- Hours ---------///
function activeHour(h) {
  wordGrid[h].classList.add("active") ;
}

if (h > 13) {
  activeHour(h - 4);
} else if (h == 0) {
  activeHour(20);
}
else {
  activeHour(h + 8);
}


















var wordHour = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve" ];
var wordMinute = ["five", "ten", "a quarter", "twenty", "half"];
var toPast = ["to", "past"];

var timeMinute = wordMinute[4];
var timeToPast = "Lorem";
var timeHour = wordHour[h-1];


if (m > 4) {
  timeMinute = wordMinute[0];
}
if ( m > 9) {
  timeMinute = wordMinute[1];
}
if ( m > 14) {
  timeMinute = wordMinute[2];
}
if ( m > 19) {
  timeMinute = wordMinute[3];
}
if ( m > 24) {
  timeMinute = wordMinute[4];
}
if ( m > 29) {
  timeMinute = wordMinute[5];
}
if ( m > 34) {
  timeMinute = wordMinute[4];
}
if ( m > 39) {
  timeMinute = wordMinute[3];
}
if ( m > 44) {
  timeMinute = wordMinute[2];
}
if ( m > 49) {
  timeMinute = wordMinute[1];
}
if ( m > 54) {
  timeMinute = wordMinute[0];
}
if ( m === 0 ) {
  timeMinute = wordMinute[5];
}

if ( m > 34 ) {
  timeToPast = toPast[0];
} else {
  timeToPast = toPast[1];
}


var sentence = "Right now it is " + timeMinute + " " + timeToPast + " " + timeHour + ".";

function setTime(time) {
  clock.innerHTML = time;
}

setTime(sentence);
