let amount = Number(prompt('input amount', '0'));
let percent = Number(prompt('input percent', '0'));
const round = 2;
const hundred = 100;
alert(isValidInput(amount,percent));
if (isValidInput(amount, percent)) {
  let tip = countTip(amount, percent);
  let sum = countResult(amount, tip);
  printResult(amount, percent, tip, sum.toFixed(round));
} else {
  alert('Invalid  input data');
}

function isValidInput(amount, percent) {
  return !(
    amount < 0 ||
    percent < 0 ||
    percent > hundred ||
    isNaN(amount) ||
    isNaN(percent)
  );
}

function countTip(amount, percent) {
  return amount * percent / hundred;
}

function countResult(amount, tip) {
  return amount + tip;
}

function printResult(amount, percent, countTip, countResult) {
  alert(
    'Check number:' +
      amount +
      'Tip:' +
      percent +
      '%' +
      'Tip amount:' +
      countTip +
      'Total sum to pay:' +
      countResult
  );
}
