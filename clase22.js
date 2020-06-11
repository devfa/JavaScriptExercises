//Herencia prototipal en JavaScript de un prototipo padre a un prototipo hijo
function heredaDe(prototipoHijo, prototipoPadre) {
    //Se define una función vacía que no hace nada.
    var fn = function () {}
    // a la función declarada arriba se le asigna a su prototype el prototype del objeto padre para no pisar el original.
    fn.prototype =  prototipoPadre.prototype;
    //al prototipo hijo en su objeto prototype se le agrega el protype padre
    prototipoHijo.prototype = new fn;
    //Al constructor del prototipo hijo se le agrega todo lo que contiene el objeto prototipoHijo
    prototipoHijo.prototype.constructor = prototipoHijo;
}

//De esta manera se crea un prototipo, es parecido a un consructor de una clase.
function Persona(nombre, apellido, altura) {
    this.nombre     = nombre;
    this.apellido   = apellido;
    this.altura     = altura;
    
}

//Así le indicamos al prototipo que contiene un atributo saludar el cual es una función. dentro de la función se puede hacer alución a las variables del prototipo mediante la palabra reservada this
Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    
}
Persona.prototype.esAlta = function (){
    if (calcularSiEsAlta(this.altura)) {
        console.log("Soy una persona alta");
    }
    else{
        console.log('No soy una persona alta');
        
    }
}
//Función flecha que recibe un solo parámetro llamado altura
const calcularSiEsAlta =  altura => altura >= 1.8;

heredaDe(Desarrollador, Persona);
function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

}

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    
}

//Aquí se crea una instancia del prototipo
/* var fabian = new Persona('Fabian', 'Orozco', 1.7);
var erika = new Persona('Erika', 'Luna', 1.56);
var arturo = new Persona('Arturo', 'Martinez', 1.80); */
