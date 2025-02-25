function sum(n1, n2) {
  return n1 + n2;
}
const multiply = (n1, n2) => {
  return n1 * n2;
};
const obj = {
  sum: sum,
  multiply: multiply,
};
module.exports = obj;
