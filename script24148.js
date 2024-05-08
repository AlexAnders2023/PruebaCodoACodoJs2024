/*console.log("Hola a todos");
//esto es un comentario
console.log("La suma de 3+8 es: ", 3 + 8);
document.write("<h2 style=´color: red;´> Texto incorporado por js");
console.info("Hola a todos esta es una informacion");//esta linea muetsra informacion

/*comentario linea 1
ahora vemos varios ejemplos de console
comentario varias lineas */

/*console.warn("Hola a todos esta es una adverencia");
console.error("Hola a todos esto es un error");  */

//cambio de valor de una variable con js
/*
var n = 10;

document.write("<p>Hola la variable es: </p>",n);

var num = 20;

document.write("<p>Hola la variable es: </p>",num);

var nu = 18;

document.write("<p>Hola la variable es: </p>",nu);

var numero = 50;

document.write("<p>Hola la variable es: </p>",numero);
*/

//constantes:
/*
const PI= 3.141592; 
const IVA= 21; //la constante no cambia nunca

console.log(PI);

const IVA= 21; 
IVA= 10.5; 
console.log(IVA);
*/

/* esta es una prueba para la 
rama de git */
//----------------------------------------------------------------------------------------------------------------------------------------------
/*funcion if con una variable let se crea un objeto para poder  usarla con ddicha funcion.
let casa = new Object();
//propiedades

casa.habitaciones = 3;
casa.metros = 40;
casa.calle = "Av.Doctor Vera";
casa.numero = 2983;
casa.valor = 60000;
casa.enAlquiler=true;

if(casa.enAlquiler == false){
    document.write("<br> La vivienda esta en alquiler");
}else{
    document.write("<br> La vivienda NO SE ALQUILA");
}*/
//--------------------------------------------------------------------------------------------------------------------------------
//este meetodo conla funcion  anonima, llama a los datos de casa y direccion, se utiliza el if para veer si esta alquilda.
// y muestra por fuera del metodo la direccion de la casa y el precio de la misma.

let casa = new Object();
//propiedades

casa.habitaciones = 3;
casa.metros = 40;
casa.calle = "Av.Doctor Vera";
casa.numero = 2983;
casa.valor = 60000;
casa.enAlquiler = false;
//metodo
casa.mostrarDomicilio =  function(){
    document.write("<br> El domicilio de la casa es : ", casa.calle, " ",casa.numero);
}
if(casa.enAlquiler == true){
    document.write("<br> La vivienda esta en alquiler");
}else{
    document.write("<br> La vivienda NO SE ALQUILA");
}
casa.mostrarDomicilio();
document.write("<br> El precio de la vivienda es de: u$s ", casa.valor);
//------------------------------------------------------------------------------------------------------
//definimos un objeto Mascota con sus atributos:

/*let mascota = {
    especie: "canino",
    raza: "caniche",
    edad:5,
    color:"blanco",
    vacunaSextuple: true,
    enAdopcion: false,
    peso: 8,

    listar: function(){
        document.write("<br> Especie: ", this.especie , "<br> raza: ", this.raza , "<br> Edad: ", this.edad ,"<br> Color: ", this.color ,"<br> Vacuna: ", this.vacunaSextuple , "<br> en adopcion: ", this.enAdopcion , "<br> Peso: ", this.peso)
    },
    ladrar: function(){
        console.log("<br> guau-guau!!!")
    },
}
console.log(mascota);
console.log("la mascota es de especie", mascota.especie);
console.log(mascota.raza);
mascota.ladrar();*/
//-------------------------------------------------------------------------------------------------------------------------------
/*definimos con una clase definimos un objeto y sus parametros, y los vamos a utilizar en doa objetos distintosnlos cuales podemos
podemos modificar los parametros, como con JAVA*/
 class Animal {
    constructor(especie, raza, edad, color, vacuna, enAdopcion, peso){
        this.esp = especie;
        this.raz = raza;
        this.eda = edad;
        this.col = color;
        this.vac = vacuna;
        this.ado = enAdopcion;
        this.pes = peso;
    }
    caminar(){
        console.log("estoy caminando");
    }
 }

 let mascota1 = new Animal("canino", "golden", 7, "chocolate,",true,true,10);
 let mascota2 = new Animal("felino","siames",4,"te con leche",false,true,4);

 console.log(mascota1);
 console.log(mascota2);
 /*ejemplo del objeto con el metodo caminar llamdo desde fuera con mascota.raz veo cual 
 es objeto que estoy usando en ese momento*/
console.log(mascota1.raz);
mascota2.caminar();
