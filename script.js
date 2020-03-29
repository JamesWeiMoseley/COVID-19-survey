//date function for the top of the page
  let d = new Date();
  document.body.innerHTML = "<h2> Today's date is " + d + "</h2>";

  $(".btn").click(function() {

     var label = $(".btn").text().trim();

     if(label == "Hide") {
       $(".btn").text("Show");
       $(".myText").hide();
     }
     else {
       $(".btn").text("Hide");
       $(".myText").show();
     }

    });
//These three functions are for the first initial questions: name, age, sex
    function updatetext() {
      var inputelem = document.getElementById("mytext");
      var elem = document.getElementById("yeet");
      elem.innerHTML = "Hello " + inputelem.value;
    }


    function updateAge() {
      var inputelem = document.getElementById("ageText");
      var elem = document.getElementById("ageTextAnswer");
      elem.innerHTML = "You are " + inputelem.value + " years old";
    }

    function updateSex() {
      var inputelem = document.getElementById("sex");
      var elem = document.getElementById("sexAnswer");
      elem.innerHTML = "You are sexy";
    }

//There functions are for the yes and no button that produce simple answers that print underneath the buttons
function yesFunction() {
  document.getElementById('demo').innerHTML = "You are sick!";
}

function noFunction() {
  document.getElementById('demo').innerHTML = "You are not sick";
}
