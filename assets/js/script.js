// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var mainDiv = $("#mainDiv");

var currDate = dayjs();
$('#currentDay').text(currDate.format('MMM D, YYYY'));


var currHour = dayjs().hour();
var currMins = dayjs().minute();
console.log(currHour + " == " + currMins);
var time;
var timetheme;

var pastClass = "row time-block past";
var presentClass = "row time-block present";
var futureClass = "row time-block future";
  
//dayjs().minute() // gets current minute

for (i = 9; i <= 17; i++){
  if ( i>= 9 && i < 12) {
    time = " AM";
  }
  else {
    time = " PM";
  }

  if (i === currHour) {
    timetheme = "row time-block present";
  }
  else if (i < currHour) {
    timetheme = "row time-block past";
  }
  else {
     timetheme = "row time-block future";
  }

  mainDiv.append(
    $("<div>", {
      id: "hour-" + i,
      class: timetheme,
    }));
  
  $("#hour-" + i + "").append(
    $("<div>", {
      text: i + time,
      class: "col-2 col-md-1 hour text-center py-3",
      id: "time-" + i
    }));
  
  $("#hour-" + i + "").append(
    $("<textarea>", {
      text: "",
      class: "col-8 col-md-10 description",
      rows: "3",
      id: "textarea-" + i
    }));
  
  $("#hour-" + i + "").append(
    $("<button>", {
      class: "btn saveBtn col-2 col-md-1",
      "aria-label": "save"
    }).append($("<i/>"), {
      class: "fas fa-save",
      "aria-hidden":"true"
    }));
}











$(document).ready(function () {
  

  // all the click events should go inside this. 
})

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});