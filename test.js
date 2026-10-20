const assert = require('assert');
const { add } = require('./app');
assert.strictEqual(add(2, 3), 6);
console.log('All tests passed');
