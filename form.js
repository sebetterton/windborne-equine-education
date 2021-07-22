var today = new Date();
var hourNow = today.getHours()
var greeting;

if(hourNow > 18) {
  greeting = 'Good evening!';
}
else if (hourNow > 12) {
  greeting = 'Good afternoon!';
}
else if (hourNow > 0) {
  greeting = 'Good morning!';
}
else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function check(){

  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var question4 = document.quiz.question4.value;
  var correct = 0;
  

      if (question1 == "Windy") {
        correct++;
      }
      if (question2 == "2017") {
        correct++;
      }
      if (question3 == "Apples") {
        correct++;
      }
      if (question4 == "Fiach") {
        correct++;
      }

      var messages = ["Great job!", "You can do better.", "Halfway there!", "Try again!", "So close to perfection!"];
      var pictures = ["images/winner.gif", "images/1correct.gif", "images/meh.gif", "images/loser.gif", "images/3-correct.gif"];

      var range; 

        if (correct < 1) {
          range = 3;
        }
        if (correct == 1){
          range = 1;
        }

        if (correct == 2) {
          range = 2;
        }
        if (correct == 4) {
          range = 0;
        }
        if (correct == 3) {
          range = 4;
        }
  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("picture").src = pictures[range];
}