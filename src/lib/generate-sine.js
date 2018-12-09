/**
 * Generate a sine waveform signal
 * @param {Number} size - wave size in bytes (e.g. 1024)
 * @param {Number} sampleRate - wave sample rate in Hz (e.g. 44100)
 * @param {Number} frequency - wave frequency in Hz (e.g. 60)
 * @returns {Float32Array} - wave sample
 */
export const generateSine = (size, sampleRate, frequency) => {
    const wave = new Float32Array(size);
    for (let i = 0; i < size; i++) {
        wave[i] = Math.sin(i / sampleRate * Math.PI * 2 * frequency);
    }
    return wave;
};
