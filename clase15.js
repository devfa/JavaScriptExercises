var signo = prompt('¿Cuál es tu signo?');

switch (signo) {
    case 'aries':
        console.log('La Luna en su signo le dará el dinamismo que tanto ha estado necesitando. No se olvide que debe reflexionar acerca de sus objetivos antes de actuar.');
        break;
    
    case 'tauro' :
        console.log('Esté preparado, ya que hoy recibirá un juicio de alguien no muy cercano pero que lo llevará a replantearse algunas situaciones centrales de su vida.');
        break;

    case 'piscis':
        console.log('Sepa que todo lo que deba hacer hoy, le requerirá de suma paciencia. Será el momento para que trate de reflexionar antes de accionar sin pensar las consecuencias.');
        break;

    case 'cancer':
    case 'cáncer':
        console.log('Ocúpese de los asuntos y trate de resolverlos lo antes posible. Deje de involucrase en situaciones complicadas que no lo involucran personalmente.');
        break;


    case 'géminis':
    case 'geminis':
        console.log('Sepa que necesitará trabajar su percepción natural. De esta forma, tendrá más chances para alcanzar todos los éxitos deseados y no cometer ningún error.');
        break;
    
    case 'leo':
        console.log('Entienda que para conseguir buenos resultados y los éxitos deseados, deberá operar de una forma más positiva. Abandone la negatividad que tanto lo caracteriza.');
        break;

    default:
        console.log('No es un signo Zodiacal válido');
        
        break;
}

if(signo === 'aries'){
    console.log('La Luna en su signo le dará el dinamismo que tanto ha estado necesitando. No se olvide que debe reflexionar acerca de sus objetivos antes de actuar.');
    
}