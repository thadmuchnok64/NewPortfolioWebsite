/*
(function (exports,require,module,__filename,__dirname){


var x = 1;
const logger = require("./Test");

//logger = 1;

logger.log("spaghetti")

})
*/

/*
//os stuff
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log("Free memory : " + freeMemory + "/" + totalMemory )

console.log(`Total Memory: ${totalMemory}`)

*/

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('pizzaTime',function(arg){
    console.log('Called',arg);
});

emitter.emit('pizzaTime',{spaghetti: 'ohgodwhy',id:2})