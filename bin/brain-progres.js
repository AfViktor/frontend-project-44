#!/usr/bin/env node

import runGame from '../src/index.js';
import runGameProgress from '../src/games/brainProgres.js';

runGame('What number is missing in the progression?   ', runGameProgress);
