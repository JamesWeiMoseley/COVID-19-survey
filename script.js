
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

    function updatetext() {
      var inputelem = document.getElementById("mytext");
      var elem = document.getElementById("yeet");
      elem.innerHTML = inputelem.value;
    }

function yesFunction() {
  console.log("yes");
}
