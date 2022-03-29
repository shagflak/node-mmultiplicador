const argv = require('yargs')
.option('b', {
  alias: 'base',
  type: 'number',
  demandOption: true,
  describe: 'La tabla que quieres multiplicar (1 al 10 por ejemplo)'
})
.option('l', {
  alias: 'listar',
  type: 'boolean',
  default: false,
  describe: 'Si se manda este arguemento listara el output que s emanda al archivo.'
})
.option('u', {
  alias: 'until',
  type: 'number',
  default: 10,
  describe: 'Define un limite para el numero multiplicado.'
})
// This runs before running the program
.check( (argv, option) => {
  if (isNaN(argv.b)) throw 'La base tiene que ser un numero!';
  if (isNaN(argv.u)) throw 'El limite tiene que ser un ';
  return true;
})
.argv;

module.exports = argv;