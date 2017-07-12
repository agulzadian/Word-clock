var wordGrid = document.querySelector("#word-grid");
var wordGridItems = document.querySelector("#word-grid").getElementsByTagName("li");
var letters =  Array.from("ITAISQTENZTWENTYUFIVEYMINUTESKABQUARTERXHALFIPASTQTOEONEJTWOVTHREERFOURFIVEGLSIXESEVENREIGHTNINESTENELEVENTWELVEOXCLOCK");

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

 // -------  misc words
 it = new Word(0,2);
 is = new Word(3,5);
 past = new Word(45,49);
 to = new Word(50,52);
 minutes = new Word(22,29);

 // ---------------------- hour and minute words

 //--minutes
 var minList = [
  tenM = new Word(6,9),      // 0
  twentyM = new Word(10,16), // 1
  fiveM = new Word(17,21),   // 2
  aM = new Word(30,31),      // 3
  quarter = new Word(32,39), // 4
  half = new Word(40,44),    // 5
  o = new Word(112,113),     // 6
  clock = new Word(114, 119) // 7
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
