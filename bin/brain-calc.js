#!/usr/bin/env node

import runGame from '../src/index.js';
import isCalc from '../src/games/brainCalc.js';

runGame('What is the result of the expression?', isCalc);
