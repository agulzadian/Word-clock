var wordGrid = document.querycreateor("#word-grid");
var wordGridItems = document.querycreateor("#word-grid").getElementsByTagName("li");
var letters =  Array.from("ITAISQTENZTWENTYUFIVEYMINUTESKABQUARTERXHALFIPASTQTOEONEJTWOVTHREERFOURFIVEGLSIXESEVENREIGHTNINESTENELEVENTWELVEOXCLOCK");
var lettersString = letters.join("");
var d = new Date();
var h = d.getHours();
var m = Math.floor((d.getMinutes())/5);

// These variables are created by the select b and e word function in combination with the create word function
var hoursWords = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve ];
var minListWords = [ten, twenty, five, a, quarter, half, o, clock];
var miscWords = [it, is, past, to, minutes];

var minList = [
 tenM = new Word(6,9),
 twentyM = new Word(10,16),
 fiveM = new Word(17,21),
 aM = new Word(30,31),
 quarter, half, o = new Word(112,113), clock ];

var words = ["it", "is", "past", "to", "minutes", "quarter", "half", "clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve" ];



// have the minute words go in reverse order after the 30 minute mark (a quarter, 20, 25, 30, 25, 20, a quarter, etc.)
if ( m > 6) {
  m = m - ((m-6)*2);
}

// ---------- make grid out of array
 for (var i = 0; i < letters.length; i++) {
   wordGrid.innerHTML += "<li>" + letters[i] + "</li>";
 }

 //#######$$$$$$----------- word class ----------$$$$$$$#######//

function Word(b, e) { // selects the right characters to feed into the create word functions
  this.b = b ;
  this.e = e ;

  this.act = function() {
    for (i = b; i < e; i++){
      wordGridItems[i].classList.add("active");
    }
  }
};

// create words for the minutes - outputs a variable with a name corresponding to a string that's fed in.
// the string is fed from the words array

// I need to reverse this by feeding in the variable names in the minlistWords

function createMinutesWords(word, index) {
  var begin = lettersString.indexOf(word);
  window[words[index]] = new Word(begin, begin + word.length); // here words should become minListM-> string array
}

for( i = 0; i < words.length; i++){ // this for loop actually calls the create function
  createMinutesWords(words[i].toUpperCase(), i);// here words should become minListM-> string array
}


























// create words for the hours
function createHoursWords(word, index) {
  var begin = lettersString.lastIndexOf(word);
  window[words[index]] = new Word(begin, begin + word.length); // here words should become hours-> string array
}

for( i = 0; i < words.length; i++){
  createHoursWords(words[i].toUpperCase(), i);// here words should become hours-> string array
}

// create misc words
function createMiscWords(word, index) {
  var begin = lettersString.lastIndexOf(word);
  window[words[index]] = new Word(begin, begin + word.length); // here words should become minListM-> string array
}

for( i = 0; i < words.length; i++){
  createMiscWords(words[i].toUpperCase(), i);// here words should become minListM-> string array
}

 // ---------------------- hour and minute words

 //--minutes

 // could actually optimize a bit more by making a new function that does the same as createWord but uses
 // .lastIndexOf instead of .indexOf in order to target the hour words
 // maybe wouldn't even need to make a new function but simply add a "minute" option in the current function
 // that can later be seperately called

 // though I would run into trouble with the variable naming since the var names for the minList items need an M
 // nice solution for the last problem would be to use the lastIndexOf function and still use the word, but
 // add an additional M at the end during the naming of the variable
 // so that would be window[words[index]] + M in the create word function


 // everything seems to work but still have to test mechanics pastthe 30 min mark




 //----------------- m = 0 ------ 1 ---- 2 ----- 3 ------- 4 ----- 5 ------- 6
 //--------------------- 0 ------ 5 ---- 10 ---- 15 ------ 20 ---- 25 ------ 30
 var minListSel = [    [6,7]   ,  2  ,   0  ,   [3,4]  ,   1  ,   [1, 2] ,   5  ];


//-- misc word activation
if (m > 34) {
  to.act();
  h = h + 1;
} else if ( m > 0 ) {
  past.act();
}

it.act();
is.act();

if ( m != 0 && m != 3 && m != 6 ) {
  minutes.act();
}

//-- minutes activation
if (Array.isArray(minListSel[m]) ) {
  minList[minListSel[m][0]].act();
  minList[minListSel[m][1]].act();
} else {
  minList[minListSel[m]].act();
}

//-- hours activation
if (h < 13 && h > 0){
  hours[h - 1].act();
} else if (h > 12) {
  hours[h - 13].act();
} else {
  hours[11].act();
}
