#!/usr/bin/env node

import runGame from '../src/index.js';
import runGameGcd from '../src/games/brainGcd.js';

runGame('Find the greatest common divisor of given numbers.', runGameGcd);
