import index from './index';

describe('index.js', () => {
    test('exports a function', () => {
        expect(index).toBeInstanceOf(Function);
    });
    test('returns expected data', () => {
        expect(index()).toBe('Hello, world');
    });
});
