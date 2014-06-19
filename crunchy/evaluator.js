two_operand_exp = /[,\(]*(\w+\(-?\w+,-?\w+\))/;
one_operand_exp = /[,|\(]*(\w+\(-?\w+\))/;

function evaluate(exp) {
  while (!exp.match(/^[0-9]+$/)) {
    var two_op_match = exp.match(two_operand_exp);
    var one_op_match = exp.match(one_operand_exp);

    op_match = two_op_match || one_op_match;

    matched_exp = op_match[1];

    var result;

    if (two_op_match) {
      result = eval_two_op_exp(matched_exp);
    } else {
      result = eval_one_op_exp(matched_exp);
    }

    exp = exp.replace(matched_exp, result.toString());
  }

  return parseInt(exp);
}

function eval_two_op_exp(exp) {
  var parsed_exp = parse_two_op_exp(exp);

  switch(parsed_exp.operator) {
    case "subtract":
      return parsed_exp.operand1 - parsed_exp.operand2;
    case "add":
      return parsed_exp.operand1 + parsed_exp.operand2;
    case "multiply":
      return parsed_exp.operand1 * parsed_exp.operand2;
  }
}

function eval_one_op_exp(exp) {
  var parsed_exp = parse_one_op_exp(exp);

  switch(parsed_exp.operator) {
    case "abs":
      return Math.abs(parsed_exp.operand);
  }
}

function parse_two_op_exp(exp) {
  var parsed = exp.split(/\(|\)|\,/);

  return {
    operator: parsed[0],
    operand1: parseInt(parsed[1]),
    operand2: parseInt(parsed[2])
  };
}

function parse_one_op_exp(exp) {
  var parsed = exp.split(/\(|\)/);

  return {
    operator: parsed[0],
    operand: parseInt(parsed[1])
  };
}

module.exports.evaluate = evaluate;