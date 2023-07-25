#!/usr/bin/env node

import runGame from '../src/index.js';
import runGameEven from '../src/games/brainEven.js';

runGame('Answer "yes" if the number is even, otherwise answer "no".', runGameEven);
