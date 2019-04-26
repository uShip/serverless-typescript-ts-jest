module.exports = {
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    testResultsProcessor: 'jest-jenkins-reporter',
    globals: {
        __TEST__: true
    }
};
