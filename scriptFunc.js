scriptFunc

const machine = {
  Initial: {
    question: "Are you feeling unwell?",
    nextStateYes: "State1",
    nextStateNo: "State2"
  },
  State1: {
    question: "Do you have a fever",
    nextStateYes: "State3",
    nextStateNo: "State4"
  },
  State2: {
    console.log("You are Not Sick"),
  }
  State3: {
    question: "Do you have trouble breathing",
    nextStateYes: "State5";
    nextStateNo: "State6";
  }

}

function answered(answer) {
  if(answer == "yes") {
    nextState = state["nextStateYes"];
  } else {
    nextState = state["nextStateNo"];
  }
}
