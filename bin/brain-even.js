#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';
import brainEven from '../src/index.js'

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${askName()}!`);

brainEven();