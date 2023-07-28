#!/usr/bin/env node

import runGame from '../src/index.js';
import runGameProgress from '../src/games/brainProgress.js';

runGame('What number is missing in the progression?   ', runGameProgress);
