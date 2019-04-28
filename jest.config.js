module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$',
    testPathIgnorePatterns: ['/node_modules/', '.*\\.d\\.ts$'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    testResultsProcessor: 'jest-jenkins-reporter',
    globals: {
        __TEST__: true
    }
};
