//requires
const argv2 = require('./config/yargs').argv2;
const colors = require('colors');


//destructuracion
const {crearArchivo, listarTabla}= require('./multiplicar/multiplicar');


let comando = argv2._[0];
//console.log(comando);
//let argv = process.argv;

switch(comando)
{
  case 'Listar':
    listarTabla(argv2.base, argv2.limite);
  break;

  case 'Crear':
     crearArchivo(argv2.base, argv2.limite)
    .then(archivo =>  console.log(`Archivo creado : ${archivo.green}`))
    .catch(e => console.log(e));

  break;

  default:
    console.log('Comando no reconocido');
}

//console.log(argv2);
//console.log(argv);


// let parametro = argv[2];
// let base = parametro.split("=")[1];
// console.log(parametro);
// console.log(base[1]);



// console.log(process.argv);
