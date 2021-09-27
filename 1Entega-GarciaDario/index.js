//declaracion variables globales

valorTotal = 0;

//la G al final de las variables indican que son Globales
let modeloG = "no definido"; //variable para guardar modelo
let colorFondoG = "no definido";//variable para guardar el color de fondo
let formatoG = "no definido";//variable para grabar el formato
let fechaG = "no definido"; //variable para guardar la fecha
let fraseG = "no definido"; //variable para guardar la frase
let spotifyVaG = "no definido"; //variable si va o no va spotify
let spotifyG = "no definido"; //variable para guardar la cancion de spotify



//precios
const dsimple = 600; //precio del diseño simple en formato digital
const lsimple = 800; //precio del diseño simple en lamina impresa
const csimple = 1600; //precio del diseño simple en cuadro terminado

const ddoble = 800; //precio del diseño doble en formato digital
const ldoble = 1000; //precio del diseño doble en lamina impresa
const cdoble = 1800; //precio del diseño doble en cuadro terminado

const dtriple = 900; //precio del diseño triple en formato digital
const ltriple = 1100; //precio del diseño triple en lamina impresa
const ctriple = 1900; //precio del diseño triple en cuadro terminado

const cspotify = 500; //precio del codigo de spotify




//Defino la clase CUADRO

class Cuadro{
    constructor(modelo, colorFondo, formato, fecha, frase, spotifyVa, spotify){
        this.modelo = modelo;  //modelo de cuadro
        this.colorFondo = colorFondo; //color del fondo del cuadro
        this.formato = formato; //formato digital, lamina o cuadro
        this.fecha = fecha; //fecha para el cuadro
        this.frase = frase;  //frase en el cuadro
        this.spotifyVa = spotifyVa; //agregar o no codigo spotify
        this.spotify = spotify;  //cancion de espotify que quieras agregar
        
    }

    //los gets para devolver los valores grabados
    get modelos(){
        return this.modelo;
    }
    get colorFondos(){
        return this.colorFondo;
    }
    get formatos(){
        return this.formato;
    }
    get fechas(){
        return this.fecha;
    }
    get frases(){
        return this.frase;
    }
    get spotifyVas(){
        return this.spotifyVa;
    }
    get spotifys(){
        return this.spotify;
    }


}


//defino funciones


//funcion de calcular costo
function calcularCosto(modelo, formato, spotify){
    let cValor = 0;

    switch(modelo){
        
        case 1: //modelo simple

            switch (formato){

                case 1: //formato digital
                    cValor= parseFloat(dsimple);
                    break;
                
                case 2: //lamina impresa
                    cValor= parseFloat(lsimple);
                    break;
                
                case 3: //cuadro completo
                    cValor= parseFloat(csimple);
                    break;
            }
            break;

        case 2: //modelo doble

            switch (formato){

                case 1: //formato digital
                    cValor= parseFloat(ddoble);
                    break;
                
                case 2: //lamina impresa
                    cValor= parseFloat(ldoble);
                    break;
                
                case 3: //cuadro completo
                    cValor= parseFloat(cdoble);
                    break;
            }
            break;

        case 3: //modelo triple

            switch (formato){

                case 1: //formato digital
                    cValor= parseFloat(dtriple);
                    break;
                
                case 2: //lamina impresa
                    cValor= parseFloat(ltriple);
                    break;
                
                case 3: //cuadro completo
                    cValor= parseFloat(ctriple);
                    break;
            }
            break;

    }

    if (spotify == 1){   // si spotify es igual a 1 (quieren agregar el codigo) se le suma el valor de agregar este codigo
        cValor=cValor+parseFloat(cspotify);
    }

    return cValor;
}


//FUNCIONES A EJECUTAR DESDE EL HTML
function ingresarModelo(){
    modeloG = parseInt(prompt("Ingrese que modelo quiere: 1- SIMPLE  // 2-  DOBLE  // 3-  TRIPLE"));
}

function ingresarColorFondo(){
    colorFondoG = prompt("Ingrese que color de fondo quiere: Blanco  //  Negro");
}

function ingresarFormato(){
    formatoG = parseInt(prompt("Seleccione el formato de entrega: 1- Formato Digital  // 2-  Lamina Impresa  //3-  Cuadro Terminado"));
}

function ingresarFecha(){
    fechaG = prompt("Ingrese la fecha y hora para realizar el cuadro en formato HH:MM y DD:MM:AAAA ");
}

function ingresarFrase(){
    fraseG = prompt("Ingrese una frase para agregar al cuadro. Limite 150 caracteres");
}

function ingresarSpotify(){

    spotifyVaG = parseInt(prompt("Queres agregar el codigo de spotify?  1- SI  //  2- NO"));

    if(spotifyVaG == 1){
        spotifyG = prompt("Ingrese la canción para generar el codigo de spotify");
    }
}


function presupuestar()
{
    const cuadro01 = new Cuadro (modeloG, colorFondoG, formatoG, fechaG, fraseG, spotifyVaG, spotifyG);
    
    alert("El valor total es: " +calcularCosto(cuadro01.modelos,cuadro01.formatos,cuadro01.spotifyVas));
    console.log("El valor total es: " +calcularCosto(cuadro01.modelos,cuadro01.formatos,cuadro01.spotifyVas));

}


