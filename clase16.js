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
    altura: 1.70
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var personas = [fabian, adela, jesus, paula, vicky ];

for(var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} mts`);
    
}