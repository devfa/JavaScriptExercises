class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre     = nombre;
        this.apellido   = apellido;
        this.altura     = altura;
        
    }

    saludar(fn) {
        var {nombre, apellido} = this;

        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido);
        }
    }

    soyAlto() {

        return this.altura >= 1.8;
    }
}

class Desarrollador extends Persona{  
    constructor(nombre, apellido, altura) {
        //super manda a llamar el constructor de la clase padre
        super(nombre, apellido, altura);
       
    }

    saludar(fn){
        // var nombre   = this.nombre;
        // var apellido = this.apellido;
        //Esto de abajo es lo mismo que hacer lo de arriba.
        var {nombre, apellido} = this;

        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
        if (fn) {
            fn(nombre, apellido, true);
        }
    }

}

function responderSaludo(nombre, apellido, esDev = false) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if(esDev) {
        console.log(`Ah mira! no sabía que eras desarrollador/a`);
        
    }
    
}

var fabian = new Desarrollador('Fabian', 'Orozco', 1.7);
var erika = new Desarrollador('Erika', 'Luna', 1.56);
var arturo = new Persona('Arturo', 'Martinez', 1.80);

fabian.saludar()
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);
