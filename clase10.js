var fabian = {
    nombre: 'Fabian',
    apellido: 'Orozco',
    edad: 26,
    ingeniero: false,
    cocinero: true,
    cantante: true,
    productor: false,
    guitarrista: true,
    drone: false
}

var juan = {
    nombre : 'juan',
    apellido: 'Gomez',
    edad: 13
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`);

    if (persona.ingeniero){
        console.log('Ingeniero');

    } else {
        console.log('No es ingeniero');
    }

    if (persona.cocinero){
        console.log('Cocinero');

    }

    if (persona.cantante){
        console.log('Cantante');

    }

    if (persona.productor){
        console.log('Productor');

    }

    if (persona.guitarrista){
        console.log('Guitarrista');

    }

    if (persona.drone){
        console.log('Vuela drone');

    }    
}

imprimirProfesiones(fabian);

const MAYORIA_DE_EDAD = 18;
function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

function mayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es Mayor de edad`);
        
    }
    else {
        console.log(`${persona.nombre} es menor de edad`);

    }
}

//mayorDeEdad(fabian);