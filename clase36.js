function diasEntreFechas(fecha1, fecha2) {
    //Calcular cuántos milisegundos hay en un día mil milisegundos por 60 da cuantos milisenundos hay en un minuto, por 60 da cuantos milisegundos hay en una hora y por 24 para sacar el total de milisegundos que hay en un día.
    const unDia = 1000 * 60 * 60 * 24; 

    //Sacar la diferencia en milisegundos de una fecha y otra, el resultado será siempre positivo debido a la función Math.abs
    const diferencia = Math.abs(fecha1 - fecha2);

    return Math.floor(diferencia / unDia);
}

//Fecha actual 
const hoy = new Date();
const nacimiento = new Date(1993, 4, 22);
