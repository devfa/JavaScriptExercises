var fabian = {
    nombre: 'Fabián',
    apellido: 'Orozco',
    altura: 1.70,
    cantidadDeLibros: 3
}

var adela = {
    nombre: 'Adela',
    apellido: 'Marcial',
    altura: 1.68,
    cantidadDeLibros: 60
}

var jesus = {
    nombre: 'Jesus',
    apellido: 'Esparza',
    altura: 1.97,
    cantidadDeLibros: 100
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.86,
    cantidadDeLibros: 5
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 6
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

//Si lo que se requiere es solamente retornar un nuevo objeto, se puede hacer de la siguiente manera:
//Después de la flecha se abren paréntesis seguidos de las llaves del objeto que va a ser retornado.
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100

});


var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);

/*var acum = 0;

 for(var i = 0; i < personas.length; i++) {
    acum = acum + personas[i].cantidadDeLibros;
}
*/


const reducer = (acum, persona) => acum + persona.cantidadDeLibros;


//Se utiliza reduce para retornar un acumulado de algun valor en el array. En este caso estamos retornando un acumulado de la cantidad de libros de cada persona.
//El primer parámetro es la función de callback y el segundo parámetro es el acumulador.
var totalDeLibros = personas.reduce(reducer, 0);

//Esto es lo mismo que la función de arriba.
/* var totalDeLibros = personas.reduce(function(acum = 0, persona){
        
    return acum + persona.cantidadDeLibros;
}, 0); */



console.log(`En total todos tienen ${totalDeLibros} libros`); 