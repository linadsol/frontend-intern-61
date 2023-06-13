#!/usr/bin/env node
import gameGenerator from '../src/gameGenerator.js';
import data from '../data/data.js';
import normalizeDataWithoutFirstLetterInOptions from '../archive/normalizeData.js'

console.log(gameGenerator())