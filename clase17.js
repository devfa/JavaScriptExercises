var fabian = {
    nombre: 'Fabián',
    apellido: 'Orozco',
    altura: 1.70
}

var adela = {
    nombre: 'Adela',
    apellido: 'Marcial',
    altura: 1.68
}

var jesus = {
    nombre: 'Jesus',
    apellido: 'Esparza',
    altura: 1.97
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.86
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}


//Esto es valido, aqui estamos recibiendo el objeto persona completo.
//const esAlta = persona => persona.altura > 1.8;

//Si solo necesitamos la altura pues podemos desestructurar nuestro objeto
const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => altura < 1.8;

var personas = [fabian, adela, jesus, paula, vicky ];

//La función array filter va a iterar nuetro array automáticamente. posición por posición
var personasAltas = personas.filter(esAlta);

//La siguiente manera es lo mismo que lo de arriba.
/* var personasAltas = personas.filter(function(persona){
    return persona.altura > 1.8;
}); */

console.log(personasAltas);
