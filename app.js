const { createFile } = require('./helpers/multiply');
const argv           = require('./config/yargs');
const colors         = require('colors');

console.clear();

  const multiplier = argv.base;
  createFile(multiplier, argv.listar, argv.until)
  .then(fileName => console.log(colors.green(fileName)))
  .catch(err => console.log(colors.red(err)));
