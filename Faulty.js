let display = document.getElementById("display");

function append(value){
  display.value += value;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  let expression = display.value;

  try {
    let result = eval(expression);

    let isFaulty = Math.random() < 0.3;

    if(isFaulty){
      console.log("⚠️ Fault injected");

      if(expression.includes("+")) result -= 2;
      else if(expression.includes("-")) result += 3;
      else if(expression.includes("*")) result /= 2;
      else if(expression.includes("/")) result += 5;
    }

    display.value = result;

  } catch {
    display.value = "Error";
  }
}