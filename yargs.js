const yargsPkg = require('yargs');

const exampleYargs = '[Example yargs] ->';

yargsPkg.command('list', 'List of items', {
    paramRequired: {        // Input parameter 
        demand: true,       // Required parameter
        alias: 'lp',        // Abreviación para el parámetro
        default: 10         // Valor por defecto
    }
});

const argv = yargsPkg.argv;
// const argv2 = process.argv;

console.log(`${ exampleYargs } ${ JSON.stringify(argv) }`);
console.log(`${ exampleYargs } ${ argv.paramRequired }`);
