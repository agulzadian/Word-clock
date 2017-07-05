var wordGrid = document.querySelector("#word-grid");
var wordGridItems = document.querySelector("#word-grid").getElementsByTagName("li");
var letters =  Array.from("ITAISQTENZTWENTYUFIVEYMINUTESKABQUARTERXHALFIPASTQTOEONEJTWOVTHREERFOURFIVEGLSIXESEVENREIGHTNINESTENELEVENTWELVEOXCLOCK");

var d = new Date();
var h = d.getHours();
var m = Math.floor((d.getMinutes())/5);
//var m = 6;
//var h = 9;

if ( m > 6) {
  m = m - ((m-6)*2);
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

  // Test 

  // alternative way to do this would be to make a function that
  // automatically detects words that you input (can simply put the words in
  // an array and have the function iterate over it) in the letters array and
  // outputs the beginning and ending indices and then uses them to create the
  // the word objects.

  // actually could just simply have one array and do it the other way around:
  // have the words already seperated and later create the letters array by taking
  // the words without the spaces and make it one big grid.

 // -------  misc words
 it = new Word(0,2);
 is = new Word(3,5);
 past = new Word(45,49);
 to = new Word(50,52);
 minutes = new Word(22,29);

 // ---------------------- hour and minute words

 //--minutes
 var minList = [
  tenM = new Word(6,9),
  twentyM = new Word(10,16),
  fiveM = new Word(17,21),
  aM = new Word(30,31),
  quarter = new Word(32,39),
  half = new Word(40,44),
  o = new Word(112,113),
  clock = new Word(114, 119)
 ];

 //----------------- m = 0 ------ 1 ---- 2 ----- 3 ------- 4 ----- 5 ------- 6
 //--------------------- 0 ------ 5 ---- 10 ---- 15 ------ 20 ---- 25 ------ 30
 var minListSel = [    [6,7]   ,  2  ,   0  ,   [3,4]  ,   1  ,   [1, 2] ,   5  ];

 //-- hours
 var hours = [
  one = new Word(53,56),
  two = new Word(57,60),
  three = new Word(61, 66),
  four = new Word(67, 71),
  five = new Word(71, 75),
  six = new Word(77,80),
  seven = new Word(81,86),
  eight = new Word(87,92),
  nine = new Word(92,96),
  ten = new Word(97,100),
  eleven = new Word(100, 106),
  twelve = new Word(106,112),
  ];

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
