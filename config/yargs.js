

const argv2 = require('yargs')
      .options({
        'base': {
          alias: 'b',
          describe: 'base de la tabla',
          demandOption: true
        },
        'limite': {
          alias: 'l',
          describe: 'limite de la tabla ',
          default:10,
          demandOption: true
        }
      })  
      .help()
      .argv;

module.exports = {
   argv2
}