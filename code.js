//pull info from data tables and put them into lists
var nameList     = getColumn("Periodic Table Elements", "Name");
var abbrevList   = getColumn("Periodic Table Elements", "Symbol");
var chargeList   = getColumn("Periodic Table Elements", "Charge");
var diatomicList = getColumn("Periodic Table Elements", "Diatomic");
var metalList    = getColumn("Periodic Table Elements", "Atom Classification");
var weightList   = getColumn("Periodic Table Elements", "Atomic Weight");
var numberList   = getColumn("Periodic Table Elements", "Atomic Number");

//creates variables that will be filled when the lists are filtered
var atomicNum = [];
var charge    = [];
var fullName  = [];
var diatomic  = [];
var metal     = [];
var weight    = [];

//when the submit button is pressed, the user is directed to the result screen
//the lists are filtered and the result screen is updated
onEvent("submit", "click", function( ) {
  setScreen("resultScreen");
  updateScreen();
});

//sets screen back to the survey screen and clears the element input
onEvent("homeIcon", "click", function( ) {
  setScreen("surveyScreen");
  setText("elementInput", "");
  setText("atomicNumberOutput", "");
  setText("chargeOutput", "");
  setText("nameOutput", "");
  setText("metalOutput", "");
  setText("weightOutput", "");
  setText("diatomicOutput", "");
});

//filters the lists into the empty lists
function filter() {
  //calls lists
  nameList;
  abbrevList;
  chargeList;
  diatomicList;
  metalList;
  weightList;
  numberList;
  
  //calls variables
  var element = getText("elementInput");
  atomicNum = [];
  charge    = [];
  fullName  = [];
  diatomic  = [];
  metal     = [];
  weight    = [];
  
  for (var i = 0; i < nameList.length; i++) {
    if ((abbrevList[i] == element || nameList[i] == element)) {
      appendItem(fullName, nameList[i]);
      appendItem(atomicNum, numberList[i]);
      appendItem(charge, chargeList[i]);
      appendItem(diatomic, diatomicList[i]);
      appendItem(metal, metalList[i]);
      appendItem(weight, weightList[i]);
    }
  }
}

//updates each element on the result screen
function updateScreen() {
  filter();
  if (charge.length > 0) {
    setText("atomicNumberOutput", "Atomic #:" + atomicNum[0]);
    setText("chargeOutput", "Charge:" + charge[0]);
    setText("nameOutput", fullName[0]);
    setText("metalOutput", metal[0]);
    setText("weightOutput", "Weight:" + weight[0]);
    if (diatomic[0] == true) {
      setText("diatomicOutput", "Yes");
    } else {
      setText("diatomicOutput", "No");
    }
  } else {
    setText("nameOutput", "We couldn't find your element");
    setText("metalOutput", "Try again!");
  }
}
