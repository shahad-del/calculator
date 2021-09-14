let operand1 = 0;
let operand2 = 0;
let operator = undefined;
let shouldReplaceNextDigit = false;

// function readNumber(keyVal) {
//   const displayInput = document.getElementById("userNumber");
//   let curVal = displayInput.value;
//   if (curVal === "0" || curVal === "") {
//     displayInput.value = keyVal;
//   } else {
//     if (keyVal === ".") {
//       if (curVal.indexOf(".") != -1) {
//         return;
//       }

//       shouldReplaceNextDigit = true;

//       displayInput.value += ".0";
//     } else {
//       if (shouldReplaceNextDigit) {
//         var idx = curVal.indexOf(".") + 1;
//         //curVal[idx] = keyVal;
//         curVal = curVal.substring(0, idx) + keyVal;
//         shouldReplaceNextDigit = false;
//         displayInput.value = curVal;
//       }else {
//         displayInput.value += keyVal;
//       }
//     }
//   }
// }
function checkIfDigit(event) {
  const curKey = event.key;
  const curKeyCode = event.keyCode;
  const curKeyAsInt = parseInt(curKey);

  console.log(curKeyCode);
  var allowedKeys = [8, 16, 37, 38, 39, 40,46, 190];

  var isSpecialKeyPressed = event.metaKey || event.ctrlKey;
  if (!isSpecialKeyPressed && allowedKeys.indexOf(curKeyCode) == -1) {
    if (isNaN(curKeyAsInt)) {
      event.preventDefault();
      return;
    }
  } 
}

function readOperator(opVal) {
  const displayInput = document.getElementById("userNumber");
  const curVal = displayInput.value;
  if (curVal === "0" || curVal === "") {
    return;
  } else {
    operand1 = parseFloat(curVal);
    operator = opVal;
    displayInput.value = "";
    document.getElementById("output").innerText = curVal + " " + opVal;
  }
}

function calcResult() {
  if (operand1 === 0) return;
  if (operator === undefined) return;
  const displayInput = document.getElementById("userNumber");
  const curVal = displayInput.value;
  if (curVal === "0" || curVal === "") {
    return;
  } else {
    operand2 = parseFloat(curVal);
    let result = 0;
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
    }

    displayInput.value = "";
    document.getElementById("output").innerText =
      operand1 + " " + operator + " " + operand2 + " = " + result;
    operand1 = 0;
    operand2 = 0;
    operator = undefined;
  }
}
