const area = (r) => {
  return  r*r*Math.PI
}

const circumference = (r) => {
    return r*2*Math.PI
}

module.exports.area = area;
module.exports.circumference = circumference;