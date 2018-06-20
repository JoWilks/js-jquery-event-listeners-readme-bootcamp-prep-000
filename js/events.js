//define functions here

<<<<<<< HEAD
//bind click event to the p tag, alert "Hey!" when Paragraph clicked.
function getIt() {
$('p').on('click', function () {   
alert("Hey!")     
})
}


// binds load event that adds the class "tasty" to the image to add a red frame around it.
function frameIt() {
$('img').on('load',function() { 
  $('img').addClass("tasty");
})
}
=======

function getIt() {
    alert("Hey!")     //bind click event to the p tag, alert "Hey!" when Paragraph clicked.
}

$('p').click(getIt)

// binds load event that adds the class "tasty" to the image to add a red frame around it.
function frameIt() {
  $('img').addClass("tasty");
}

$('img').on('load',getframeIt);


function pressIt(e) {
  //binds an event that alerts the user when the G key was pressed down
  if (e.which == 71) {
  alert("G key pressed");
  }
}

$('#typing').on('keydown', pressIt);

function submitIt() {
  //binds an event that alerts "Your form is going to be submitted now." when the form is submitted
}

$(document).ready(function(){
  
>>>>>>> 429d7818e5504235064a040ed00cc12b40cfbf4e

function pressIt(key) {
  //binds an event that alerts the user when the G key was pressed down
  $('#typing').on('keydown', function(key) {
    if (key.which == 71) {
  alert("G key pressed");
    }
  })
}

<<<<<<< HEAD
function submitIt() {
  //binds an event that alerts "Your form is going to be submitted now." when the form is submitted
 $('form').on('submit', function() {
  alert("Your form is going to be submitted now.")
})
}

$(document).ready(function(){
  //call functions here
})
=======

});
>>>>>>> 429d7818e5504235064a040ed00cc12b40cfbf4e
