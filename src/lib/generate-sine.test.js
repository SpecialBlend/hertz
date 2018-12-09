import { generateSine } from './generate-sine';

describe('generate-sine.js', () => {
    test('returns expected data', () => {
        const wave = generateSine(1024, 44100, 60);
        expect(wave).toBeInstanceOf(Float32Array);
        expect(wave).toHaveProperty('length', 1024);
        expect(wave[0]).toBe(0);
    });
});
