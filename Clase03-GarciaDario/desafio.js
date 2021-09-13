//Curso de Javascript
//Alumno Garcia Amado, Dario\
//Desafio de la Clase 03



//Declaración de variables y constantes
let menu = 0;
let numeroSuma = 0;
let suma = 0;
const espacio = " ";

do{
    menu = prompt("Ingrese la opción 0-Salir, 1-Suma números 2-Concatenar texto 3-Texto a repetir y cantidad de veces");

    switch (menu){
        
        case "0":
            break;

        case "1": //SUMAR NUMEROS

            numeroSuma = prompt("Ingrese numero a sumar, salir ingresando 0");

            while(numeroSuma != 0){
                suma = parseFloat(suma) + parseFloat(numeroSuma);
                console.log("Suma parcial: "+suma);
                numeroSuma = prompt("Ingrese numero a sumar, salir ingresando 0");
            }

            if(suma == 0){
                console.log("No hubo números que sumar");
            }
            else{
                console.log("Resultado final de la suma: " +suma);
            }
            break;


        case "2": //concatenar texto
            
            let palabra = prompt("Ingresar una palabra o texto. Ingrese ESC para salir");
            
            if(palabra == "ESC"){
                console.log("Ingresaste ESC sin ingresar otra palabra o texto");
            }
            
            else{

                let texto = palabra;
                console.log(texto);

                do{

                    palabra = prompt("Ingresar otra palabra o texto. Ingrese ESC para salir");
                    
                    //Solo concatena la palabra o texto si es que no se ingresó ESC
                    if(palabra != "ESC"){
                        texto = texto + espacio + palabra;
                        console.log(texto);
                    }
                    

                }while(palabra != "ESC")
                console.log("Ingresaste ESC, el texto final es: " +texto);
            }
            break;
        
        
        case "3": //texto a repetir y cantidad de veces
            
            let textoRepetir = prompt("Ingresar texto a repetir");
            let repetir = prompt("Ingresar cantidad de veces que se repite el texto");

            if ((repetir>0) && (parseInt(repetir)))
            {
                for(let i = 0; i<parseInt(repetir); i++){
                    console.log(textoRepetir);
                }
            }
            else{
                console.log("Ingresaste un número de repeticiones no valido");     
            }
            break;
       
        
        default:
            console.log("Ingrese una opción valida");
            break;
    }
}while (menu !=0)

console.log("Gracias Vuelvas Prontos");