import * as R from 'ramda';

import { generateSine } from './generate-sine';
import { analyzeZCA } from './analyze-zca';
import { nearestHalf } from './nearest-half';
import { concatFloat32Arrays } from './concat-float32-array';

describe('returns expected data for samples', () => {
    test('returns expected data for zero', () => {
        const size = 0;
        const sampleRate = 100;
        const frequency = 10;
        const wave = generateSine(size, sampleRate, frequency);
        const analyzedFrequency = analyzeZCA(wave, sampleRate);
        expect(analyzedFrequency).toBe(0);
    });
    test('returns expected data for zero (1)', () => {
        const size = 1024;
        const sampleRate = 100;
        const frequency = 0;
        const wave = generateSine(size, sampleRate, frequency);
        const analyzedFrequency = analyzeZCA(wave, sampleRate);
        expect(analyzedFrequency).toBe(0);
    });
    test('returns expected data for sample', () => {
        const sampleRate = 44100;
        const frequency = 120;
        const size = sampleRate * 2;
        const wave = generateSine(size, sampleRate, frequency);
        const expectedFrequency = nearestHalf(frequency);
        const analyzedFrequency = analyzeZCA(wave, sampleRate);
        expect(analyzedFrequency).toBe(expectedFrequency);
    });
    test('returns expected data for sample (1)', () => {
        const sampleRate = 44100;
        const frequency = 60;
        const size = sampleRate * 2;
        const wave = generateSine(size, sampleRate, frequency);
        const expectedFrequency = nearestHalf(frequency);
        const analyzedFrequency = analyzeZCA(wave, sampleRate);
        expect(analyzedFrequency).toBe(expectedFrequency);
    });
    test('returns expected data for sample (2)', () => {
        const sampleRate = 44100;
        const frequency = 1.5;
        const size = sampleRate * 2;
        const wave = generateSine(size, sampleRate, frequency);
        const expectedFrequency = nearestHalf(frequency);
        const analyzedFrequency = analyzeZCA(wave, sampleRate);
        expect(analyzedFrequency).toBe(expectedFrequency);
    });
    test('returns expected data for sample (3)', () => {
        const sampleRate = 120.8;
        const frequency = 1.5;
        const size = sampleRate * 2;
        const wave = generateSine(size, sampleRate, frequency);
        const expectedFrequency = nearestHalf(frequency);
        const analyzedFrequency = analyzeZCA(wave, sampleRate);
        expect(analyzedFrequency).toBe(expectedFrequency);
    });
});

describe('returns expected data for calculated samples', () => {
    const maxSampleRateFactor = 64;
    const maxFrequency = 1024;
    for (let frequency = maxFrequency; frequency > 1; frequency /= 2) {
        for (let sampleRateFactor = maxSampleRateFactor; sampleRateFactor > 2; sampleRateFactor /= 2) {
            const normalizedSampleRate = Math.floor(frequency * sampleRateFactor);
            const size = normalizedSampleRate * 2;
            test(`returns expected data for size=${size} frequency=${frequency} sampleRate=${normalizedSampleRate}`, () => {
                const expectedFrequency = nearestHalf(frequency);
                const wave = generateSine(size, normalizedSampleRate, frequency);
                const analyzedFrequency = analyzeZCA(wave, normalizedSampleRate);
                expect(analyzedFrequency).toBe(expectedFrequency);
            });
        }
    }
});

describe('returns expected data for mixed samples', () => {
    test('returns expected data for mixed sample', () => {
        const samplingRate = 44100;
        const frequencies = [0, 50, 60, 120, 240];
        const size = samplingRate * 2;
        const waves = frequencies.map(
            frequency => generateSine(size, samplingRate, frequency)
        );
        const mixedWave = concatFloat32Arrays(waves);
        const expectedNominalFrequency = R.sum(frequencies) / frequencies.length;
        const calculatedFrequency = analyzeZCA(mixedWave, samplingRate);
        const varience = Math.abs(calculatedFrequency - expectedNominalFrequency);
        expect(varience).toBeLessThan(1);
    });
});
