/**
 * Analyze frequency of a waveform using the zero crossing algorithm.
 * !! wave size should always be greater than or equal to sampleRate * 2 !!
 * !! sampleRate should always be greater than or equal to highest target frequency * 2 !!
 * @param {Float32Array} wave - waveform data
 * @param {Number} sampleRate - sample rate
 * @param {Number} zero - the "zero" value to use as crossing threshold
 * @return {Number} - analyzed frequency in Hz rounded to the nearest 0.5
 */
import { nearestHalf } from './nearest-half';

export const analyzeZCA = (wave, sampleRate, zero = 0) => {
    let cycles = 0;
    let state = 0;
    let current = 0;
    for (let i = 0; i < wave.length; i++) {
        current = wave[i];
        if (state ^ current < zero) {
            cycles += 1;
            state ^= 1;
        }
    }
    if (cycles > 0) {
        const frequency = (cycles + 1) * sampleRate / wave.length / 2;
        return nearestHalf(frequency);
    }
    return 0;
};
