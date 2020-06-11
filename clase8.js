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

function imprimirNombreEnMayusculas(persona){
    //var nombre = persona.nombre es lo mismo que lo de abajo
    var { nombre } = persona;
    var { edad } = persona;
    console.log('Hola me llamo ' + nombre.toUpperCase() + ' y tengo '+edad+' Años');
    
}


imprimirNombreEnMayusculas(fabian);
imprimirNombreEnMayusculas(dario);

function cumpleaños(persona){
    
    return {
        ...persona,
        edad: persona.edad + 1
    }
 }

