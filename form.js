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

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  
  function validateEmail() {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");
  
    if (validateEmail(email)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
    } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
  }
  
  $("#validate").on("click", validate);