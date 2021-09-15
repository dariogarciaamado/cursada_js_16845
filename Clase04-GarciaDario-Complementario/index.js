//FUNCIONES PARA SABER SI UN NUMERO ENTERO ES PAR O IMPAR



//declaracion de variables globales
let salida = parseInt(0); //variable para la salida del programa
let numeroPoI = 0;


//ingreso de numeros enteros, filtra los que no son enteros y vuelve a pedir el ingreso
function IngresarFiltrar(){

    let numero = parseInt(prompt("Ingresar un número entero para conocer si es PAR o IMPAR. 0 para salir"));

    if (numero == 0){
        salida = 1; //pone a la variable salida = 1 para luego salir del programa
    }

    else{ //si es distinto de 0 va a filtrar para que sea un numero entero

        while((parseInt(numero)!=numero)&&(numero!=0)){ //compara al numero con su entero. En el caso de ser numero entero es el mismo valor.

            numero= prompt("El número ingresado no es un Entero. Ingresar un número entero para conocer si es PAR o IMPAR. 0 para salir");
        }
    }

    if (numero == 0){
        salida = 1; //pone a la variable salida = 1 para luego salir del programa
    }

    return numero;
    
}

//Cálculos para averiguar si el número ingresado
function ParImpar(numero){
    let par_impar = 0;

    if((numero%2)==0){ //pregunta si el resto de dividir el numero por 2 da 0, en ese caso se trata de numero par, de lo contrario impar
        par_impar = 0;  //en este caso es par entonces deja a la variable igual a 0
    }

    else{
        par_impar = 1; //en este caso es impar y pone a la variable igual a 1
    }

    return par_impar;

}

//Imprime el número ingresa y si es par o impar
function Imprimir(par_impar, numero){
    if(par_impar == 0){
        console.log("El número "+numero+" es PAR");
    }

    if(par_impar == 1){
        console.log("El número "+numero+" es IMPAR");
    }
}



//EJECUCION

do{
    numeroPoI=IngresarFiltrar(); //pide ingresar numero

    if(salida ==0){
        Imprimir(ParImpar(numeroPoI), numeroPoI); //a Imprimir le paso el valor obtenido en ParImpar para imprimir si es par o impar y el valor del número ingresado
    }

}while (salida!=1)

//saludo final
console.log("Ejecución finalizada");
alert("Gracias Vuelvas Prontos");

