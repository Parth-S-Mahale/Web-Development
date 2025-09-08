const crypto = require('crypto')

const hash = crypto.createHash('sha256')
                   
hash.update('Hello, World')

console.log(hash.digest('hex'));
