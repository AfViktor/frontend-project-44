#!/usr/bin/env node

import runGame from '../src/index.js';
import runGameCalc from '../src/games/brainCalc.js';

runGame('What is the result of the expression?', runGameCalc);
