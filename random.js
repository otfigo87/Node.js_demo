const randomNum = (a, b) => {
  let num = Math.random() * 10;
  if (num > 5) {
    return a;
  }
  return b;
};

module.exports = randomNum;
