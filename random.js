const randomNum = (a, b) => {
   return Math.floor(Math.random() * (a - b) + 1) + b;
};

module.exports = randomNum;
