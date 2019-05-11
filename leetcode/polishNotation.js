function calc(a, b, token) {
  switch (token) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return Math.trunc(a / b);
    default:
      throw new Error("invalid token", token);
  }
}

function evalRPN(tokens) {
  var stack = [];
  var counter = 0;
  var isNumber;
  var val1;
  var val2;
  var result;

  while (counter !== tokens.length) {
    isNumber = Number(tokens[counter]);
    if (isNumber || isNumber === 0) {
      stack.push(isNumber);
    } else {
      val2 = stack.pop();
      val1 = stack.pop();
      result = calc(val1, val2, tokens[counter]);
      stack.push(result);
    }

    counter++;
  }
  return stack.pop();
}
