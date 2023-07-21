#!/usr/bin/env node

import runGame from '../src/index.js';
import isEvenNod from '../src/games/brainNod.js';

runGame('Find the greatest common divisor of given numbers.', isEvenNod);
