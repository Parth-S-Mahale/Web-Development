const sayHello = require('./greetings')
const math = require('./math')


const message = sayHello('Developers')

console.log(message);
console.log(math.add(2, 3));
console.log(math.subtract(7,3));
