//variables globales
let modelo = 0; //para modelo seleccionado, 1-Simple, 2-doble, 3-triple. Inicia con 1 para el bucle de corroboracion
let formato = 0; //seleccinar 1-solo diseño, 2-lamina impresa 3-cuadro completo. Inicia con 1 para el bucle de corroboracion
let spotify = 0; //para insertar codigo de spotify 1-SI, 2-NO. Inicia con 1 para el bucle de corroboracion

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

//declaracion de funciones

//funcion para pedir el diseño que queremos. Si es simple, doble o triple. Si es solo el diseño, la lamina impresa o el cuadro completo.
//tambien si queremos agregar qr de Spotify que tiene costo adicional
function pedirDiseno(){
    //pedir modelo
    modelo=parseInt(prompt("Ingresar el modelo deseado. Ingresar 1 para Simple, 2 para doble y 3 para triple"));
    while(modelo !=1 && modelo != 2 && modelo !=3){
        modelo=parseInt(prompt("Opción no valida. Ingresar el modelo deseado. Ingresar 1 para Simple, 2 para doble y 3 para triple"));
    }
    //pedir formato
    formato=parseInt(prompt("Ingresar el formato deseado. Ingresar 1 para Formato Digital, 2 para Lamina impresa, 3 para cuadro completo"));
    while(formato !=1 && formato !=2 && formato !=3){
        formato=parseInt(prompt("Opción no valida. Ingresar el formato deseado. Ingresar 1 para Formato Digital, 2 para Lamina impresa, 3 para cuadro completo"));
    }
    //pedir codigo de spotify
    spotify=parseInt(prompt("Queres agregar codigo a una canción de Spotify? Ingresar 1-SI, 2-NO"));
    while(spotify !=1 && spotify !=2){
        spotify=parseInt(prompt("Opción no valida. Para agregar codigo a una canción de Spotify ingresar 1-SI, 2-NO"));
    }
}

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


function mostrar(mod,form,spo,valor){ //muestra lo seleccionado y el costo
    
    if(mod==1 && form==1 && spo ==1){ //modelo simple, formato digital, codigo spotify
        console.log("Seleccionaste el modelo simple en formato digital con codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==1 && form==1 && spo ==2){ //modelo simple, formato digital, sin codigo spotify
        console.log("Seleccionaste el modelo simple en formato digital sin codigo de spotify. El mismo cuesta: $" +valor);
    }

    if(mod==1 && form==2 && spo ==1){ //modelo simple, lamina impresa, codigo spotify
        console.log("Seleccionaste el modelo simple en lamina impresa con codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==1 && form==2 && spo ==2){ //modelo simple, lamina impresa, sin codigo spotify
        console.log("Seleccionaste el modelo simple en lamina impresa sin codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==1 && form==3 && spo ==1){ //modelo simple, cuadro completo, codigo spotify
        console.log("Seleccionaste el modelo simple en cuadro completo con codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==1 && form==3 && spo ==2){ //modelo simple, cuadro completo, sin codigo spotify
        console.log("Seleccionaste el modelo simple en cuadro completo sin codigo de spotify. El mismo cuesta: $" +valor);
    }
    

    //----------------------------------------------------------------------------------------------------------------------


    if(mod==2 && form==1 && spo ==1){ //modelo doble, formato digital, codigo spotify
        console.log("Seleccionaste el modelo doble en formato digital con codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==2 && form==1 && spo ==2){ //modelo doble, formato digital, sin codigo spotify
        console.log("Seleccionaste el modelo doble en formato digital sin codigo de spotify. El mismo cuesta: $" +valor);
    }

    if(mod==2 && form==2 && spo ==1){ //modelo doble, lamina impresa, codigo spotify
        console.log("Seleccionaste el modelo doble en lamina impresa con codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==2 && form==2 && spo ==2){ //modelo doble, lamina impresa, sin codigo spotify
        console.log("Seleccionaste el modelo doble en lamina impresa sin codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==2 && form==3 && spo ==1){ //modelo doble, cuadro completo, codigo spotify
        console.log("Seleccionaste el modelo doble en cuadro completo con codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==2 && form==3 && spo ==2){ //modelo doble, cuadro completo, sin codigo spotify
        console.log("Seleccionaste el modelo doble en cuadro completo sin codigo de spotify. El mismo cuesta: $" +valor);
    }


    //----------------------------------------------------------------------------------------------------------------------


    if(mod==3 && form==1 && spo ==1){ //modelo triple, formato digital, codigo spotify
        console.log("Seleccionaste el modelo triple en formato digital con codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==3 && form==1 && spo ==2){ //modelo triple, formato digital, sin codigo spotify
        console.log("Seleccionaste el modelo triple en formato digital sin codigo de spotify. El mismo cuesta: $" +valor);
    }

    if(mod==3 && form==2 && spo ==1){ //modelo triple, lamina impresa, codigo spotify
        console.log("Seleccionaste el modelo triple en lamina impresa con codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==3 && form==2 && spo ==2){ //modelo triple, lamina impresa, sin codigo spotify
        console.log("Seleccionaste el modelo triple en lamina impresa sin codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==3 && form==3 && spo ==1){ //modelo triple, cuadro completo, codigo spotify
        console.log("Seleccionaste el modelo triple en cuadro completo con codigo de spotify. El mismo cuesta: $" +valor);
    }
    if(mod==3 && form==3 && spo ==2){ //modelo triple, cuadro completo, sin codigo spotify
        console.log("Seleccionaste el modelo triple en cuadro completo sin codigo de spotify. El mismo cuesta: $" +valor);
    }
}


function cuotascuotas(valor1){  //pide cantidad de cuotas, las calcula e imprime el valor

    let ccuotas = parseInt ( prompt("Cantidad de cuotas, pueden ser 1, 3, 6 o 9"));
    
    while(ccuotas !=1 && ccuotas !=3 && ccuotas !=6 && ccuotas !=9){
        ccuotas = parseInt ( prompt("Cantidad de cuotas incorrecta, solo pueden ser 1, 3, 6 o 9"));
    }

    console.log("Cantidad de cuotas seleccionadas: " +ccuotas +" Y el valor de cada cuota es: $" + (valor1/ccuotas));
}


//ejecucion de las funciones


    pedirDiseno();

    mostrar(modelo,formato,spotify,calcularCosto(modelo,formato,spotify));

    cuotascuotas(calcularCosto(modelo,formato,spotify));

