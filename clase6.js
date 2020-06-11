var fabian = {
    nombre: 'Fabian',
    apellido: 'Orozco',
    edad: 26
}

var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas({ nombre }){
   
    console.log(nombre.toUpperCase());
    
}


imprimirNombreEnMayusculas(fabian);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre: 'Pepito'});
imprimirNombreEnMayusculas();

