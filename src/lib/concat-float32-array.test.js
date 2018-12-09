import { concatFloat32Arrays } from './concat-float32-array';

describe('concat-float32-array.js', () => {
    test('returns expected data', () => {
        const arrays = [
            new Float32Array([1, 2, 3]),
            new Float32Array([4, 5, 6]),
            new Float32Array([4, 5, 6]),
        ];
        const result = concatFloat32Arrays(arrays);
        expect(result).toBeInstanceOf(Float32Array);
        expect(result.length).toBe(9);
    });
    test('returns expected data (1)', () => {
        const array1 = new Float32Array([1, 2, 3]);
        const result = concatFloat32Arrays([array1]);
        expect(result).toBe(array1);
    });
});
