//FRASES ALEATORIAS
const frases = [
    "Como va todo bien?",
    "Soy una página amigable",
    "Soy el proyecto Skynet",
    "Gracias por entrar a mi página",
    "Aguante codear",
    "Para entenderme tenes que saber JS",
    "Se me acaban las ideas",
    "Tantas frases para decir jajajaja",
    "Sos groso por entrar a mi página",
    "Muchas gracias Crack",
    "Adios"
];


//generar el id de manera random para seleccionar una frase
const fraseRandom = Math.round(Math.random()*10);



//Acceder a los elementos del HTML
const nombreTitulo = document.getElementById('nombreTitulo');
const fraseAleatoria = document.getElementById('textoAleatorio');



//INGRESO DE DATOS
let nombre = prompt("Ingresa tu nombre");

let colorLetra = prompt ("Ingrese en que color quiere ver el texto 1-Negro  2-Azul  3-Rojo");

while (colorLetra!=1 && colorLetra!=2 && colorLetra!=3){
    colorLetra = prompt ("Opción no valida. Ingrese en que color quiere ver el texto 1-Negro  2-Azul  3-Rojo");
}


//switch para agregar la clase para cambiar el color de los textos, agregando la clase correspondiente
switch (colorLetra){
    case '1':
        nombreTitulo.className = 'negro';
        fraseAleatoria.className = 'negro';
        break;
    
    case '2':
        nombreTitulo.className = 'azul';
        fraseAleatoria.className = 'azul';
        break;

    case '3':
        nombreTitulo.className = 'rojo';
        fraseAleatoria.className = 'rojo';
        break;
}



//asignamos el nombre al nodo del html
nombreTitulo.textContent = "Hola " + nombre;

//asignamos el texto aleatorio al nodo del html
fraseAleatoria.textContent =  frases[fraseRandom];