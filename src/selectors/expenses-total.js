export default (expenses = []) =>
  expenses
    .map(expense => expense.amount)
    .reduce((prev, cur) => prev + cur, 0);
