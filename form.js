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

      var messages = ["Great job!", "Good try!", "Halfway there!", "Try again!"]

      var range; 

        if (correct < 1) {
          range = 3;
        }

        if (correct > 1 && correct < 3) {
          range = 2;
        }
        if (correct > 3) {
          range = 0;
        }
        if (correct == 3) {
          range = 1;
        }
  document.getElementById("after_submit").style.visibility = "visible";

  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}