/* eslint-disable no-process-env */
const { log, error } = console;

// Mute console output before tests unless DEBUG is enabled
beforeEach(() => {
    if (process.env.DEBUG === 'true') {
        console.log = jest.fn(log);
        console.error = jest.fn(error);
    } else {
        console.log = jest.fn();
        console.error = jest.fn();
    }
});

// Restore console output after tests
afterAll(() => {
    console.log = log;
    console.error = error;
});
