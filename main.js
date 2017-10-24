var wordGrid = document.querySelector("#word-grid");
var wordGridItems = document.querySelector("#word-grid").getElementsByTagName("li");
var lettersString =  "ITAISQTENZTWENTYUFIVEYMINUTESKABQUARTERXHALFIPASTQTOEONEJTWOVTHREERFOURFIVEGLSIXESEVENREIGHTNINESTENELEVENTWELVEOXCLOCK";
var letters = Array.from(lettersString);
var words = ["it", "is", "past", "to", "minutes", "quarter", "half", "clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve" ];

var d = new Date();
var h = d.getHours();
var min = Math.floor((d.getMinutes())/5);
var minToPast = Math.floor((d.getMinutes())/5);
var sec = d.getSeconds();

setInterval(function(){
  d = new Date();
  h = d.getHours();
  min = Math.floor((d.getMinutes())/5);
  sec = d.getSeconds();

  if ( min > 6) { // reverses the order of the min words to be shown
    min = min - ((min - 6) * 2);
    h = h + 1;
  }

  console.log(h + " " + min + " " + sec);
},1000);

if ( min > 6) { // reverses the order of the min words to be shown
  min = min - ((min - 6) * 2);
}

// ---------- make grid out of array
 for (var i = 0; i < letters.length; i++) {
   wordGrid.innerHTML += "<li>" + letters[i] + "</li>";
 }

 //#######$$$$$$----------- word class ----------$$$$$$$#######//

function Word(b, e) {
  this.b = b ;
  this.e = e ;
  this.active = false;

  this.act = function() {
    for (i = b; i < e; i++){
      wordGridItems[i].classList.remove("inactive");
      wordGridItems[i].classList.add("active");
    }
  }

  this.inact = function() {
    for (i = b; i < e; i++){
      wordGridItems[i].classList.remove("active");
      wordGridItems[i].classList.add("inactive");
    }
  }

  this.activate = function() {
    if (this.active) {
      this.act();
    } else {
      this.inact();
    }
  }
};

function createWords(word, index) {
  var begin = lettersString.lastIndexOf(word);
  window[words[index]] = new Word(begin, begin + word.length); // here words should become minListM-> string array
}

for( i = 0; i < words.length; i++){ // this for loop actually calls the create function
  createWords(words[i].toUpperCase(), i);// here words should become minListM-> string array
}

//--minutes
var minList = [tenM = new Word(6,9), twentyM = new Word(10,16), fiveM = new Word(17,21), aM = new Word(30,31), quarter, half, o = new Word(112,113), clock];

//--------------- min = 0 ------ 1 ---- 2 ----- 3 ------- 4 ----- 5 ------- 6
//--------------------- 0 ------ 5 ---- 10 ---- 15 ------ 20 ---- 25 ------ 30
var minListSel = [    [6,7]   ,  2  ,   0  ,   [3,4]  ,   1  ,   [1, 2] ,   5  ];

//-- hours
var hours = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, ];

//-- misc word activation
if (minToPast > 6) {
  to.act();
  h = h + 1;
} else if ( minToPast > 0 ) {
  past.act();
}

it.act();
is.act();

if ( min != 0 && min != 3 && min != 6 ) {
  minutes.active = true;
}

// ============== UPDATE ACTIVATION ============ //
setInterval(function(){
  for (var i = 0; i < minList.length; i++) {
    minList[i].active = false;
  }

  for (var i = 0; i < hours.length; i++) {
    hours[i].active = false;
  }

  //-- minutes activation
  if (minListSel[min].length == 2 ) {// if the min selection has two words
    minList[minListSel[min][0]].active = true;
    minList[minListSel[min][1]].active = true;
  } else {
    minList[minListSel[min]].active = true;
  }

  //-- hours activation
  if (h < 13 && h > 0){
    hours[h - 1].active = true;
  } else if (h > 12) {
    hours[h - 13].active = true;
  } else {
    hours[11].active = true;
  }

  for (var i = 0; i < hours.length; i++) {
    hours[i].activate();
  }

  for (var i = 0; i < minList.length; i++) {
    minList[i].activate();
  }
},1000);

// =============== INITIAL ACTIVATION =============== //
if (minListSel[min].length == 2 ) {// if the min selection has two words
  minList[minListSel[min][0]].act();
  minList[minListSel[min][1]].act();
} else {
  minList[minListSel[min]].act();
}

if (h < 13 && h > 0){
  hours[h - 1].act();
} else if (h > 12) {
  hours[h - 13].act();
} else {
  hours[11].act();
}

// add a mechanisum that properly rounds of to the nearest min

// would be cool to add a daily quote thing

// turn the ul in the html into a table so i can more specifically define how the characters are distributed
// across the grid, since in tables i can select specific columns and rows based on their numbers
// and use those numbers to make conditions to make the words aren't cut off:
// for example: if the width of the grid being rendered in "real time" is 10, and the word minutes starts at
// column 8 (and therefore is going to be cut off after "mi"), i can write to inject another two characters
// in front of the word minutes so it's bumped to the next row.

// I don't think I need to change the letterString system, but what I need to do is make another var before lettersString
// that contains individual characters as individual array items (i.e. var letterChars) that is later used to
// create the letterString var bby doing letterChars.join().
// this way I can inject filler characters at whatever index in the letterChars array I wish

// using this method of creating the grid and filler chars, I can also make it so that there
// are filler chars all the way to the edges of the screen and apply specific opacities according
// to the column (and row) number and by that have the filler chars fade out towards the edges of the screen
// maybe I should make seperate grids for the fade out chars that seamlessly stick to the actual word clock grid
// so like FILLER GRID | CLOCK GRID | FILLER GRID

// would also be super dope to have a subtle glow/ripple/wave effect by having the opactiy go slightly up in
// a wave pattern from the first column to the last. Would be extra dop ( but i think pretty hard) to have the
// wave glow effect go diagonal
