function evalRPN(tokens) {
  while (tokens.length > 1) {
    for (let i = 0; i < tokens.length; i++) {
      if ("+-*/".includes(tokens[i])) {
        const a = Number(tokens[i - 2]);
        const b = Number(tokens[i - 1]);
        let result;

        if (tokens[i] === "+") {
          result = a + b;
        } else if (tokens[i] === "-") {
          result = a - b;
        } else if (tokens[i] === "*") {
          result = a * b;
        } else if (tokens[i] === "/") {
          result = Math.trunc(a / b);
        }

        tokens.splice(i - 2, 3, result.toString());
        break;
      }
    }
  }
  return Number(tokens[0]);
}
