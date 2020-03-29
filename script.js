//date function for the top of the page
  let d = new Date();
  document.body.innerHTML = "<h2> Today's date is " + d + "</h2>";

//These three functions are for the first initial questions: name, age, sex
    function updatetext() {
      var inputelem = document.getElementById("nameText");
      var elem = document.getElementById("nameAnswer");   //For reference: nameAnswer is the user's name
      elem.innerHTML = "Hello " + inputelem.value;
    }

    function updateAge() {
      var inputelem = document.getElementById("ageText");
      var elem = document.getElementById("ageTextAnswer");  //For reference: ageTextAnswer is the users name
      elem.innerHTML = "You are " + inputelem.value + " years old";
    }

    function updateSex() {
      var inputelem = document.getElementById("sex");
      var elem = document.getElementById("sexAnswer");  //for reference: sexAnswer is the users sex
      elem.innerHTML = "You are sexy";
    }

//There functions are for the yes and no button that produce simple answers that
//print underneath the buttons
function yesFunction() {
  document.getElementById('demo').innerHTML = "You are sick!";
}

function noFunction() {
  document.getElementById('demo').innerHTML = "You are not sick";
}


//These are the second group of questions to determine high or low risk before asking
//the if else questions
function addUpAnswers() {
  var score1 = 0;
  var score2 = 0;
  var riskLevel = "";

  var choices = document.getElementsByTagName('input');
    for(i=0; i<choices.length; i++) {
      if(choices[i].checked) {
        if(choices[i].value=='score1') {
          score1 += 1;
        }
      }
    }

    if(score1 == 4) {
      answer.innerHTML = "You are high risk for contraction.";
    } else if (score1==3 || score1==2) {
      answer.innerHTML = "You are medium risk for contraction.";
    } else {
      answer.innerHTML = "You are low risk for contraction.";
    }
    var answerbox = document.getElementById('answer');

}
