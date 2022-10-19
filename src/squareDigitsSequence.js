function solution(a0) {
    let a = a0;
    let count = 1;
    let arr = [a0];
    while (true) {
        a = a
            .toString()
            .split('')
            .map((x) => x * x)
            .reduce((a, b) => a + b);
        if (arr.includes(a)) {
            return count + 1;
        }
        arr.push(a);
        count++;
    }
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test squareDigitsSequence

// alternative solution
