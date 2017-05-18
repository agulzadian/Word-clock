var clock = document.querySelector("#clock");
var wordGrid = document.querySelector("#word-grid").getElementsByTagName("li");
var wordGridTwo = document.querySelector("#word-grid-two");
var wordGridTwoItems = document.querySelector("#word-grid-two").getElementsByTagName("li");
var d = new Date();
var curTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var h = d.getHours();
var m = d.getMinutes();

 //var m = 10;
 // var h = 9;

var words =  Array.from("ITAISTENBZTWENTYUFIVEYMINUTESKABQUARTERXHALFIPASTQTOEONEJTWOVTHREERFOURFIVEGLSIXESEVENREIGHTNINESTENELEVENTWELVEOXCLOCK");



//------------ element selectors
var minSelList = [21 ,3, 1, 5, 2, 2, 6, 2, 2, 5, 1, 3];
var minSel = Math.floor(m/5);

// ---------- make grid out of array

for (var i = 0; i < words.length; i++) {
  wordGridTwo.innerHTML += "<li>" + words[i] + "</li>";
}

// ----------- word objects

function Word(b, e) {
  this.b = b;
  this.e = e;

  this.activate = function() {
    for (i = b; i < e; i++){
      wordGridTwoItems[i].classList.add("active");
    }
  }
};

it = new Word(0,2);
is = new Word(3,5)
tenM = new Word(5,8);
twentyM = new Word(10,16);
fiveM = new Word(17,21);
minutes = new Word(22,29);
aM = new Word(30,31);
quarter = new Word(32,39);
half = new Word(40,44);
past = new Word(45,49);
to = new Word(50,52);

one = new Word(53,56);
two = new Word(57,60);
three = new Word(61, 66);
four = new Word(67, 71);
five = new Word(71, 75);
six = new Word(77,80);
seven = new Word(81,86);
eight = new Word(87,92);
nine = new Word(92,96);
ten = new Word(97,100);
eleven = new Word(100, 106);
twelve = new Word(106,112);
oH = new Word(112,113);
clockH = new Word(114, 119);

var actArray = [1, twelve, eleven ]

actArray[1].activate();

console.log(actArray);

//activateMinute(minSel);











// ----------------- To Past ---------///

// 7 = past 8 =to

if (m > 34) {
  wordGrid[8].classList.add("active") ;
  wordGrid[7].classList.add("inactive") ;
  //it.classList.add("active");

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



/* make a prototype of words taking param b(egin) and e(nd), prototype
should contain a function making it active. I can make an array of the
word objects and itterate through the array (like i've done with
wordGrid down here) and call the activate function .
*/

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
