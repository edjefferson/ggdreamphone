$.mbAudio.sounds = {


  effectSprite: {
    id: "effectSprite",
    ogg: "all.mp3",
    mp3: "all.mp3",
    //example of sprite
    sprite: {
      H1: {
        id: "H1",
        start: 0,
        end: 2,
        loop: false
      },
      H2: {
        id: "H2",
        start: 2,
        end: 4,
        loop: false
      },
      H3: {
        id: "H3",
        start: 4,
        end: 6,
        loop: false
      },
      H4: {
        id: "H4",
        start: 6,
        end: 8,
        loop: false
      },
      H5: {
        id: "H5",
        start: 8,
        end: 10,
        loop: false
      },
      H6: {
        id: "H6",
        start: 10,
        end: 12,
        loop: false
      },
      S1: {
        id: "S1",
        start: 12,
        end: 14,
        loop: false
      },
      S2: {
        id: "S2",
        start: 14,
        end: 16,
        loop: false
      },
      S3: {
        id: "S3",
        start: 16,
        end: 18,
        loop: false
      },
      S4: {
        id: "S4",
        start: 18,
        end: 20,
        loop: false
      },
      S5: {
        id: "S5",
        start: 20,
        end: 22,
        loop: false
      },
      S6: {
        id: "S6",
        start: 22,
        end: 24,
        loop: false
      },
      S7: {
        id: "S7",
        start: 24,
        end: 26,
        loop: false
      },
      S8: {
        id: "S8",
        start: 26,
        end: 28,
        loop: false
      },
      S9: {
        id: "S9",
        start: 28,
        end: 30,
        loop: false
      },
      S10: {
        id: "S10",
        start: 30,
        end: 32,
        loop: false
      },
      S11: {
        id: "S11",
        start: 32,
        end: 34,
        loop: false
      },
      S12: {
        id: "S12",
        start: 34,
        end: 36,
        loop: false
      },
      C1: {
        id: "C1",
        start: 36,
        end: 38,
        loop: false
      },
      C2: {
        id: "C2",
        start: 38,
        end: 40,
        loop: false
      },
      C3: {
        id: "C3",
        start: 40,
        end: 42,
        loop: false
      },
      C4: {
        id: "C4",
        start: 42,
        end: 44,
        loop: false
      },
      C5: {
        id: "C5",
        start: 44,
        end: 46,
        loop: false
      },
      C6: {
        id: "C6",
        start: 46,
        end: 48,
        loop: false
      },
      D: {
        id: "D",
        start: 48,
        end: 50,
        loop: false
      },
      R1: {
        id: "R1",
        start: 50,
        end: 52,
        loop: false
      },
      R2: {
        id: "R2",
        start: 52,
        end: 54,
        loop: false
      },
      R3: {
        id: "R3",
        start: 54,
        end: 56,
        loop: false
      },
      R4: {
        id: "R4",
        start: 56,
        end: 58,
        loop: false
      },
      R5: {
        id: "R5",
        start: 58,
        end: 60,
        loop: false
      },
      R6: {
        id: "R6",
        start: 60,
        end: 62,
        loop: false
      }


    }
  }
};


function audioIsReady() {

  setTimeout(function() {
    $('#buttons').fadeIn();
    $("#loading").hide();


  }, 1000);

}


$(document).on("initAudio", function() {

  //otherwise sound is initialized on the first tap loosing time and UX
  $.mbAudio.pause('effectSprite', audioIsReady);

  $('#start').hide();
  $("#loading").show();
});

function makeArray(count) {
  var result = [];
  if (typeof(count) == "function") {
    for (var i = 1; i <= count; i++) {
      result.push(i);
    }
  } else {
    for (var i = 1; i <= count; i++) {
      result.push(i);
    }
  }
  return result;
}

function removeItem(array, item) {
  for (var i in array) {
    if (array[i] == item) {
      array.splice(i, 1);
      break;
    }
  }
}

function fisherYates(myArray) {
  var i = myArray.length,
    j, tempi, tempj;
  if (i === 0) return false;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    tempi = myArray[i];
    tempj = myArray[j];
    myArray[i] = tempj;
    myArray[j] = tempi;
  }
}

phonenumbers = {
  5557852: "1",
  5559713: "2",
  5551277: "3",
  5551121: "4",
  5554508: "5",
  5559641: "6",
  5551852: "7",
  5558758: "8",
  5558825: "9",
  5551925: "10",
  5551793: "11",
  5558965: "12",
  5556720: "13",
  5554655: "14",
  5553051: "15",
  5553536: "16",
  5551944: "17",
  5552937: "18",
  5550963: "19",
  5555021: "20",
  5555717: "21",
  5554863: "22",
  5555612: "23",
  5558354: "24"
}

var txtclues =
{
  H1: "But they're not at NYU.",
  H2: "But they're not at the High School.",
  H3: "But they're not at the Empire.",
  H4: "But they're not at Columbia.",
  H5: "But they're not in the Hamptons.",
  H6: "But they're not on the Met steps.",
  S1: "But they're not into photography.",
  S2: "But they don't play a musical instrument.",
  S3: "But they're not texting.",
  S4: "But they're not scheming.",
  S5: "But they're not writing.",
  S6: "But they're not studying.",
  S7: "But they don't like ice cream.",
  S8: "But they don't eat yoghurt.",
  S9: "But they don't eat hot dogs.",
  S10: "But they don't drink fizzy drinks.",
  S11: "But they don't drink whiskey.",
  S12: "But they don't smoke cigars.",
  C1: "But they're not wearing blue neckwear.",
  C2: "But they're not wearing yellow shoes.",
  C3: "But they're not wearing a red hat.",
  C4: "But they're not wearing a pink mask.",
  C5: "But they're not holding a brown bag.",
  C6: "But they're not holding a green umbrella.",
  D: "I'm not telling."
}

var people = [{
  "id": 1,
  "hangout": 4,
  "sf": 3,
  "clothing": 1,
  "name": "Serena"
}, {
  "id": 2,
  "hangout": 4,
  "sf": 4,
  "clothing": 4,
  "name": "Blair"
}, {
  "id": 3,
  "hangout": 1,
  "sf": 5,
  "clothing": 4,
  "name": "Dan"
}, {
  "id": 4,
  "hangout": 2,
  "sf": 10,
  "clothing": 4,
  "name": "Nate"
}, {
  "id": 5,
  "hangout": 6,
  "sf": 8,
  "clothing": 4,
  "name": "Jenny"
}, {
  "id": 6,
  "hangout": 3,
  "sf": 11,
  "clothing":4,
  "name": "Chuck"
}, {
  "id": 7,
  "hangout": 1,
  "sf": 5,
  "clothing": 2,
  "name": "Vanessa"
}, {
  "id": 8,
  "hangout": 2,
  "sf": 9,
  "clothing": 2,
  "name": "Eric"
}, {
  "id": 9,
  "hangout": 5,
  "sf": 1,
  "clothing": 5,
  "name": "Lily"
}, {
  "id": 10,
  "hangout": 5,
  "sf": 2,
  "clothing": 3,
  "name": "Rufus"
}, {
  "id": 11,
  "hangout": 1,
  "sf": 6,
  "clothing": 6,
  "name": "Ivy"
}, {
  "id": 12,
  "hangout": 4,
  "sf": 3,
  "clothing": 2,
  "name": "Dorota"
}, {
  "id": 13,
  "hangout": 3,
  "sf": 12,
  "clothing": 1,
  "name": "Jack"
}, {
  "id": 14,
  "hangout": 5,
  "sf": 1,
  "clothing": 1,
  "name": "Tripp"
}, {
  "id": 15,
  "hangout": 1,
  "sf": 6,
  "clothing": 3,
  "name": "Georgina"
}, {
  "id": 16,
  "hangout": 4,
  "sf": 4,
  "clothing": 3,
  "name": "Juliet"
}, {
  "id": 17,
  "hangout": 2,
  "sf": 11,
  "clothing": 3,
  "name": "Bart"
}, {
  "id": 18,
  "hangout": 6,
  "sf": 7,
  "clothing": 3,
  "name": "Isabel"
}, {
  "id": 19,
  "hangout": 6,
  "sf": 7,
  "clothing": 5,
  "name": "Kati"
}, {
  "id": 20,
  "hangout": 5,
  "sf": 2,
  "clothing": 6,
  "name": "Carter"
}, {
  "id": 21,
  "hangout": 3,
  "sf": 12,
  "clothing": 6,
  "name": "William"
}, {
  "id": 22,
  "hangout": 6,
  "sf": 8,
  "clothing": 6,
  "name": "Penelope"
}, {
  "id": 23,
  "hangout": 2,
  "sf": 10,
  "clothing": 1,
  "name": "Hazel"
}, {
  "id": 24,
  "hangout": 2,
  "sf": 9,
  "clothing": 5,
  "name": "Jonathan"
} ]

var informer = [];
var clues = [];
var linkedclues = {};

var randomclues = ["R1","R2","R3","R4","R5","R6"];

//document.write(informer['id']);

//document.write("<br />");

function newGame() {
  clues = [];
  informer = people[Math.floor(Math.random() * 24)];
  var hangouts = makeArray(6);
  removeItem(hangouts, informer['hangout']);
  var sfs = makeArray(12);
  removeItem(sfs, informer['sf']);
  var clothing = makeArray(6);
  removeItem(clothing, informer['clothing']);


  for (var i in hangouts) {
    clues.push("H" + hangouts[i])
  }
  for (var i in sfs) {
    clues.push("S" + sfs[i])
  }

  for (var i in clothing) {
    clues.push("C" + clothing[i])
  }

  clues.push("D");
  clues.push("D");
  clues.push("D");

  fisherYates(clues);

  document.cookie = "clues =" + clues.join("|");
  document.cookie = "informer =" + informer['id'];
  linkClues();

}


function linkClues() {
  for (var i in clues) {

    j = parseInt(i) + 1
    linkedclues[j] = clues[i];
  }
}

function loadGame() {
  clues = cluecookie.split("|")
  peopleno = parseInt(informercookie) - 1;
  informer = people[peopleno]
  linkClues();
}

var cluecookie = document.cookie.replace(/(?:(?:^|.*;\s*)clues\s*\=\s*((?:[^;](?!;))*[^;]?).*)|.*/, "$1");
var informercookie = document.cookie.replace(/(?:(?:^|.*;\s*)informer\s*\=\s*((?:[^;](?!;))*[^;]?).*)|.*/, "$1");
if (cluecookie == "") {
  newGame();
} else {
  loadGame();
}

function message(text) {


  setTimeout(function() {
    document.getElementById('message').innerHTML = text
  }, 2000);

}

function clueset() {
  message(txtclues[linkedclues[lol]]);
  if (linkedclues[lol] == "D") {
  $.mbAudio.queue.add('effectSprite', linkedclues[lol]);
  
}
else {
  message(txtclues[linkedclues[lol]]);
  fisherYates(randomclues);
  console.log(randomclues[0]);
  $.mbAudio.queue.add('effectSprite', randomclues[0]);
  console.log(linkedclues[lol]);
}
}


function fullclueset() {
  message(txtclues[linkedclues[lol]]);
  if (linkedclues[lol] == "D") {
  $.mbAudio.queue.add('effectSprite', linkedclues[lol]);
  
}
else {
  message(txtclues[linkedclues[lol]]);
  fisherYates(randomclues);
  console.log(randomclues[0]);
  $.mbAudio.queue.add('effectSprite', randomclues[0]);
  $.mbAudio.queue.add('effectSprite', linkedclues[lol]);
  console.log(linkedclues[lol]);
}
}

function call() {
  document.getElementById('message').innerHTML = "..."
  phonenumber = document.getElementById('number').value;

  lol = phonenumbers[phonenumber];

  if (phonenumber.charAt(0) == "G") {
    guess = phonenumbers[phonenumber.substring(1)];
    console.log(guess);
    console.log(informer['id']);
    if (guess == informer['id']) {
       message("u got it XOXO");
     }
    else {
      message("srry, guess again XOXO");
    }
  } else {
    
    if (phonenumber.charAt(0) == "S") {
    
      lol = phonenumbers[phonenumber.substring(1)];
    
    if (parseInt(lol) < 25 && parseInt(lol) > 0) {

      fullclueset();
      clearNumber();
    } else

    {
      message("wrong number");
    }
    
    
  }
  
  else
  
  { 
  
  
    if (parseInt(lol) < 25 && parseInt(lol) > 0) {

      clueset();
      clearNumber();
    } else

    {
      message("wrong number");
    }
  
  
  }
    

  }
  clearNumber();
}

function clearNumber() {
document.getElementById('number').value = '';}