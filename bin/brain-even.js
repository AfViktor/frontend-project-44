#!/usr/bin/env node

import { runGame } from '../src/index.js';
import isEven from '../src/games/brainEven.js';

runGame('Answer \"yes\" if the number is even, otherwise answer \"no\".', isEven);
