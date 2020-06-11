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
const MAYORIA_DE_EDAD = 18;

/* var esMayorDeEdad = function (persona){
    return persona.edad >= MAYORIA_DE_EDAD;
} */

//Aqui se está desestructurando el objeto persona que viene desde el llamado a la función esMayorDeEdad() en la función mayorDeEdad().
var esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

var esMenorDeEdad = (persona) =>  {
    if (!esMayorDeEdad(persona)) {
        return console.log('ACCESO DENEGADO');
    }
};

//Cuando la funcón recibe solo un parámetro, se pueden obviar los () ya que la flecha => indica que lo que va antes es una función que recibe un solo parámetro
//var esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

function mayorDeEdad(persona) {

    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es Mayor de edad`);
        
    }
    else {
        console.log(`${persona.nombre} es menor de edad`);

    }
}
/* 
function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
            console.log('ACCESO DENEGADO');
    }
} */