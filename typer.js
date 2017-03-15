var textArray = [];
textArray[0] = "I'm a programmer";
textArray[1] = "I'm will build something";
textArray[2] = "You will love it!";
textArray[3] = "HOI";
// Contains the text
// Contains the variable names of every text

var currentPosition = 0;
// This variable contains where we are in the array

var textArrayPosition = 0;
// This variable contains where we are in the text array

var textInArray;
// Contains the text as a array

var type;
// type contains the setInterval

var runable = "true";
//Contains if the application is ready to run

var typeID = "text";
// Contains the ID where we are typeing

var speed = 100;
// Contains the speed in miliseconds

function intializeTyper(array,speed, typeID) {
  // starts everything
  setTextArray(array);
  setSpeed(speed);
  setTypeID(typeID);
  // Declaration of basic variabels

  typeHandler();
  blinkerHandler();
}
function setSpeed(speed) {
  speed = speed;
}
function setTypeID(typeID) {
  typeID = typeID;
}
function setTextArray(object) {
  // Get the textArray and set if for the script
  if (typeof(object) == "object") {
    textArray = object;
  }
  else {
    alert("This isn't a array");
    runable = "false";
  }
}
function createBlinker() {
  // This function creates the blinker after the ID of the typer
  var blink = document.createElement("div");
  blink.id = "blinker";
  
}
function stringToArray(array) {
  array = array.split("");
  return(array);
}

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

      // Its to long lets break it!
      clearInterval(type);
      type = setInterval(backSpace, speed);
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
function typeHandler() {
  // This function handels everything
  if (runable == "true") {
    var MaximumLenghtTextArray = getMaximumTextArray();
    if (MaximumLenghtTextArray != currentPosition) {
      // Nothings to de special
    }
    else {
      // If we have done everything
      currentPosition = 0;
    }
    var currentText = textArray[currentPosition];
    textInArray = stringToArray(currentText);
    type = setInterval(typeing, speed);
  }
}
function getMaximumTextArray() {
  // This function get the maximum text that we can display
  return(textArray.length);
}

function placeText(text) {
  // This function places the tekst
  document.getElementById(typeID).innerHTML = text;
}
function blinkerHandler() {
  // Blinks
  var blink;
  blink = setInterval(blinker, 300);
}
function blinker() {
  // This function wil enable and disable the blinker
  var blink = document.getElementById('blinker');
  if (blink.className == "") {
    blink.className = "blinker";
  }
  else {
    blink.className = "";
  }

}
