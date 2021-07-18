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

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}