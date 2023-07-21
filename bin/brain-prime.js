#!/usr/bin/env node

import runGame from '../src/index.js';
import isPrime from '../src/games/brainPrime.js';

runGame('Answer "yes" if given number is prime. Otherwise answer "no".', isPrime);
