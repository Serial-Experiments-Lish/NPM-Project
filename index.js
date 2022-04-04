const Moment = require('moment');
const a = new Moment

console.log(a.format('h:mm:ss a'));

console.log('My application just ran');


const myModule = {
    sayHi: function(){
            console.log('hi');
    }
}

module.exports = myModule;

// const myMod = require('./myModule');
// myMod.sayHi();