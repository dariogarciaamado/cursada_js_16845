//genero constantes con la finformación de los elementos para operar mejor

//Input del primer núnmero
const inputNum1 = document.getElementById('num1');
//Input del segundo número
const inputNum2 = document.getElementById('num2');
//lista de operaciones matemáticas
const operacion = document.getElementById('operacion');
//botón de resultado
const btn1 = document.getElementById('btn1');

//h2 donde se va a imprimir el resultado
const resultado = document.getElementById('resultado');



//Declaración de funciones


//funcion que obtiene los numeros ingresados y la operación seleccionada y devuelve el valor de la misma
function Matematica () {

    //obtengo los 2 números de los imput
    let numero1 = parseFloat(inputNum1.value);
    let numero2 = parseFloat(inputNum2.value);

    //obtengo la operación seleccionada
    let ope = operacion.value;

    //genero una variable con el resultado de la operación, que es lo que va a retornar la función
    let resultadoo = 0;

    //hago un switch para hacer las distintas operaciones
    switch (ope){
        case 'suma':
            resultadoo = numero1 + numero2;
            break;

        case 'resta':
            resultadoo = numero1 - numero2;
            break;

        case 'multi':
            resultadoo = numero1 * numero2;
            break;

        case 'divi':
            resultadoo = numero1 / numero2;
            break;
    }
    
    return resultadoo;
};

//funcion que imprime en pantalla el valor obtenido
function Imprimir (resultadoImp){

    resultado.textContent = "El resultado es: " + resultadoImp;
}


//Realizo operacion e imprimo al acer clic en el botón Resultado
btn1.addEventListener('click', () => {
    Imprimir(Matematica());
});

//Realizo operacion e imprimo al precionar la tecla Enter
document.body.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        Imprimir(Matematica());
    }
});