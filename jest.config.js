module.exports = {
    collectCoverageFrom: [
        '**/*.js',
        '**/*.jsx',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/coverage/',
        '<rootDir>/jest.config.js',
        '<rootDir>/webpack.config.js',
        '<rootDir>/scripts',
    ],
    globalSetup: './__mocks__/setup-test-environment.js',
    setupTestFrameworkScriptFile: './__mocks__/setup-test-framework.js',
    testEnvironment: 'node',
};
