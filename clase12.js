var fabian = {
    nombre: 'Fabian',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 60
}

console.log(`Al inicio del año ${fabian.nombre} pesa ${fabian.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_AÑO = 365;
const aumentarDePeso = persona =>  persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for(var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random();

    if (random < 0.25) {
        //aumenta de peso
        aumentarDePeso(fabian);
        
    }else if(random < 0.5) {
        //adelgazar
        adelgazar(fabian);
    }
}

console.log(`Al final del año ${fabian.nombre} pesa ${fabian.peso.toFixed(2)}kg`);

