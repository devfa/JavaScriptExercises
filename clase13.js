var fabian = {
    nombre: 'Fabian',
    apellido: 'Lifszyc',
    edad: 28,
    peso: 60
}

console.log(`Al inicio del año ${fabian.nombre} pesa ${fabian.peso}kg`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_AÑO = 365;
const META = fabian.peso - 3;
var dias = 0;
const aumentarDePeso = persona =>  persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

while (fabian.peso > META) {
    if (comeMucho()) {
        //Aumentar de peso
        aumentarDePeso(fabian);
    }
    if (realizaDeporte()) {
        //Adelgazar
        adelgazar(fabian);
    
    }

    dias += 1;
}

console.log(`Pasaron ${dias} días Hasta que ${fabian.nombre} adelgazó 3kg`);

