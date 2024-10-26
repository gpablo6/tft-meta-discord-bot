import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';
import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    testEnvironment: "node",
    preset: 'ts-jest',
    roots: ['<rootDir>'],
    modulePaths: [compilerOptions.baseUrl],
    moduleNameMapper: pathsToModuleNameMapper(
      compilerOptions.paths
    ),
    coveragePathIgnorePatterns: [
      "/node_modules/"
    ],
    verbose: true
}

export default config;
