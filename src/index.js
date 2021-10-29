const _ = require('lodash');

function times2(numbers) {
    return _.map(numbers, (n) => n * 2);
}

console.log(times2([1, 2, 3]));
