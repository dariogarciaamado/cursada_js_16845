//declaracion variables globales
//la G al final de las variables indican que son Globales
let modeloG = "no definido";
let colorFondoG = "no definido";
let formatoG = "no definido";
let fechaG = "no definido";
let fraseG = "no definido";
let spotifyG = "no definido";

let opcion = 0;


//Defino la clase CUADRO

class Cuadro{
    constructor(modelo, colorFondo, formato, fecha, frase, spotify){
        this.modelo = modelo;  //modelo de cuadro
        this.colorFondo = colorFondo; //color del fondo del cuadro
        this.formato = formato; //formato digital, lamina o cuadro
        this.fecha = fecha; //fecha para el cuadro
        this.frase = frase;  //frase en el cuadro
        this.spotify = spotify;  //cancion de espotify que quieras agregar
        this.presupuestado = false;  //si se presupuesto originalmente es false porque no esta presupuestado
    }

    presupuesto(){
        this.presupuestado = true; //al ejecutar la funcion presupuesto presupuestado pasa a true porque se presupuestó
    }

    mostrar(){ //para mostrar los datos
        console.log("El modelo elegido es: "+this.modelo);
        console.log("El color de fondo elegido es: "+this.colorFondo);
        console.log("El formato elegido es: "+this.formato);
        console.log("La fecha elegida es: "+this.fecha);
        console.log("La frase elegida es: "+this.frase);
        console.log("La canción elegida para el codigo de spotify es: "+this.spotify);
        

        //el proximo if toma si es true o false el item presupuestado, que es true si fue presupestado o false si todavia no lo fue
        if(this.presupuestado==true){
            console.log("Ya fué presupuestado");
        }
        else{
            console.log("Aun no fue presupuestado");
        }
    }

    get modelos(){
        return this.modelo;
    }
}


//defino funciones

function ingresar(){  //esta funcion es para ingresar los valores del objeto
    modeloG = prompt("Ingrese que modelo quiere: Simple  //  Doble  //Triple");
    colorFondoG = prompt("Ingrese que color de fondo quiere: Blanco  //  Negro");
    formatoG = prompt("Seleccione el formato de entrega: Formato Digital  //  Lamina Impresa  //  Cuadro Terminado");
    fechaG = prompt("Ingrese la fecha y hora para realizar el cuadro en formato HH:MM y DD:MM:AAAA ");
    fraseG = prompt("Ingrese una frase para agregar al cuadro. Limite 150 caracteres");
    spotifyG = prompt("Ingrese la canción para generar el codigo de spotify");

}



//ejecucion

ingresar();
//las variables que se le pasa al objeto Cuadro fueron modificadas en ingresar, ya que son variables globales
const cuadro01 = new Cuadro (modeloG, colorFondoG, formatoG, fechaG, fraseG, spotifyG); 

//realizado para leer lo ingresado antrs y despues de presupuestarlo. A demas esta adentro de un do while para que cuando se ingresa 0 finalize.
do{
    opcion = parseInt(prompt("Ingresar opción:0=Salir 1=Marcar como presupuestado 2=Leer los datos ingresados"));
    if(opcion == 1){
        cuadro01.presupuesto();
        console.log("Se realizó el presupuesto");
    }
    if(opcion == 2){
        cuadro01.mostrar();
    }

}while(opcion !=0)


console.log("Finalizada la ejecución");
alert("Gracias por elegirnos")