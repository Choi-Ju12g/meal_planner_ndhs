const {getMealList} = require('./crawl.js');

const test = await getMealList();

console.log(test);