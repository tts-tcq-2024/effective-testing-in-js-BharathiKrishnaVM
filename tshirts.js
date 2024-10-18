const {expect} = require('chai');

function size(cms) {
    if (cms < 38) {
        return 'S';
    } else if (cms > 38 && cms < 42) {
        return 'M';
    } else {
        return 'L';
    }
}

expect(size(37)).equals('S');
expect(size(40)).equals('M');
expect(size(43)).equals('L');

expect(size(38)).equals('S'); //Fail test case
console.log('All is well (maybe!)');
