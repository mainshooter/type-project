var textArray = [];
textArray[0] = "I'm a programmer";
textArray[1] = "I'm gone build something";
textArray[2] = "You gone love it!";
textArray[2] = "And i'm gone build it!";
textArray[3] = "HOI";
textArray[4] = "Tring tring lekker ding";
// Contains the text

// Contains the variable names of every text
function setTextArray() {
  // Get the textArray and set if for the script
}
function stringToArray(array) {
  array = array.split("");
  return(array);
}
var currentPosition = 0;
// This variable contains where we are in the array

var textArrayPosition = 0;
// This variable contains where we are in the text array

function typeing() {
  // This function is gone type
  var text = "";
  // console.log(textInArray.length
  for (var i = 0; i < textArrayPosition; i++) {
    // We loop trough the array that contains the text
    // We do that by the textArrayPosition
    if (textInArray.length != textArrayPosition ) {
      // If the array don't reased it limit
      text += textInArray[i];
      placeText(text);
    }
    // var textArrayPositionPlusOne = textArrayPosition + 1;
    else if (textInArray.length == textArrayPosition) {
      text += textInArray[i];
      placeText(text);
      // To peform the last type
      // We are doing it once here

      var textArrayPositionPlusOne = textArrayPosition + 1;
      // Its to long lets break it!
      clearInterval(type);
      type = setInterval(backSpace, 120);
      // backSpace();
    }
  }
  textArrayPosition++;
}
function backSpace() {
  // This function will remove the text
    textInArray.pop();
    // We will remove the last element
    text = "";
    // Clear the text that we made before
    for (var i = 0; i < textInArray.length; i++) {
      text += textInArray[i];
      // Scan the array
    }
    placeText(text);
    if (textInArray.length == 0) {
      // If we are done we don't need to do the remove
      textArrayPosition++;
      clearInterval(type);

      currentPosition++;
      textArrayPosition = 0;
      typeHandler();
      // Start again
    }
}

var textInArray;
// Contains the text in an array

var type;
// Tpe contains the setInterval
function typeHandler() {
  // This function handels everything
  var MaximumLenghtTextArray = getMaximumTextArray();
  if (MaximumLenghtTextArray != currentPosition) {
    var currentText = textArray[currentPosition];
    textInArray = stringToArray(currentText);

    type = setInterval(typeing, 120);
  }
  else {
    // If we have done everything
    currentPosition = 0;
    var currentText = textArray[currentPosition];
    textInArray = stringToArray(currentText);

    type = setInterval(typeing, 120);
  }
}
function getMaximumTextArray() {
  // This function get the maximum text that we can display
  return(textArray.length);
}

function placeText(text) {
  // This function places the tekst
  document.getElementById('text').innerHTML = text;
}
function blinkerHandler() {
  console.log("RUN");
  var blink;
  blink = setInterval(blinker, 300);
}
function blinker() {
  // This function wil enable and disable the blinker
  console.log("RUN");
  var blink = document.getElementById('blinker');
  console.log(blink.className);
  if (blink.className == "") {
    blink.className = "blinker";
  }
  else {
    blink.className = "";
  }

}
