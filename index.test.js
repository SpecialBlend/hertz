import { analyzeZCA, generateSine } from './index';

describe('index.js', () => {
    test('exports analyzeRCA', () => {
        expect(analyzeZCA).toBeInstanceOf(Function);
    });
    test('exports generateSine', () => {
        expect(generateSine).toBeInstanceOf(Function);
    });
});
