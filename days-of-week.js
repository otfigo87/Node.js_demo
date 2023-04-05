// console.log(module)

//similar to export default
// module.exports = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

//export multiple things
module.exports.weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
module.exports.getWeekday = (dayNum) => {
    if(dayNum < 0 || dayNum > 6) dayNum = 0;
    return this.weekdays[dayNum]
}
