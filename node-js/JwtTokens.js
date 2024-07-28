const jwt = require('jsonwebtoken');
const password = "123random"

const token = jwt.sign({
    name : 'karan'
}, password);

// console.log(token)

const decoded = jwt.verify(token, password);
console.log(decoded, token);