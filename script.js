const fs = require("fs"); //Node Module
const daysOfWeek = require("./days-of-week"); //our created Module
const request = require("request"); // from request npm

//request package
request('http://jsonplaceholder.typicode.com/users', 
function(err, res, body){
    if(err){
        console.log(err)
    }
    // console.log(body);
    // console.log(res);
})

// console.log(typeof fs)
console.log(daysOfWeek)
const day = daysOfWeek.getWeekday(5)
console.log(day)

//write a new file
fs.writeFile('./hello.text', 'Hello!', function(e){
   if (e) {
    //create an explicit error to stop our process
    throw Error(e.message)
   }
   console.log("done writing file!")
})

fs.appendFile("./hello.text", " More Data from node", function(){
    console.log('Done')
})


//=======================Practice
const circle = require("./circle");
const random = require("./random");

console.log(circle.area(50))
console.log(random(100, 200))
