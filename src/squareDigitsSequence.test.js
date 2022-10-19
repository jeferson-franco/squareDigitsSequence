const solution = require('./squareDigitsSequence.js');

test('test 1', () => {
    expect(solution(16)).toBe(9);
});

test('test 2', () => {
    expect(solution(103)).toBe(4);
});

test('test 3', () => {
    expect(solution(1)).toBe(2);
});

test('test 4', () => {
    expect(solution(13)).toBe(4);
});

test('test 5', () => {
    expect(solution(89)).toBe(9);
});

test('test 6', () => {
    expect(solution(612)).toBe(16);
});
