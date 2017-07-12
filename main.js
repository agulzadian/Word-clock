var wordGrid = document.querySelector("#word-grid");
var wordGridItems = document.querySelector("#word-grid").getElementsByTagName("li");
var lettersString =  "ITAISQTENZTWENTYUFIVEYMINUTESKABQUARTERXHALFIPASTQTOEONEJTWOVTHREERFOURFIVEGLSIXESEVENREIGHTNINESTENELEVENTWELVEOXCLOCK";
var letters = Array.from(lettersString);
var words = ["it", "is", "past", "to", "minutes", "quarter", "half", "clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve" ];

var d = new Date();
var h = d.getHours();
var min = Math.floor((d.getMinutes())/5);

//var min = 3;
//var h = 9;

if ( min > 6) { // reverses the order of the min words to be shown
  m = min - ((min - 6) * 2);
} else {
  m = min;
}

// ---------- make grid out of array
 for (var i = 0; i < letters.length; i++) {
   wordGrid.innerHTML += "<li>" + letters[i] + "</li>";
 }

 //#######$$$$$$----------- word class ----------$$$$$$$#######//

  function Word(b, e) {
    this.b = b ;
    this.e = e ;

    this.act = function() {
      for (i = b; i < e; i++){
        wordGridItems[i].classList.add("active");
      }
    }
  };

  function createWords(word, index) {
    var begin = lettersString.indexOf(word);
    window[words[index]] = new Word(begin, begin + word.length); // here words should become minListM-> string array
  }

  for( i = 0; i < words.length; i++){ // this for loop actually calls the create function
    createWords(words[i].toUpperCase(), i);// here words should become minListM-> string array
  }

 // ---------------------- hour and minute words

 //--minutes
 var minList = [tenM = new Word(6,9), twentyM = new Word(10,16), fiveM = new Word(17,21), aM = new Word(30,31), quarter, half, o = new Word(112,113), clock];

 //----------------- m = 0 ------ 1 ---- 2 ----- 3 ------- 4 ----- 5 ------- 6
 //--------------------- 0 ------ 5 ---- 10 ---- 15 ------ 20 ---- 25 ------ 30
 var minListSel = [    [6,7]   ,  2  ,   0  ,   [3,4]  ,   1  ,   [1, 2] ,   5  ];

 //-- hours
 var hours = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, ];

//-- misc word activation
if (min > 6) {
  to.act();
  h = h + 1;
} else if ( min > 0 ) {
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
