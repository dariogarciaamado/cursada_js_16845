//Declaracion de objeto Auto con info de marca, modelo y año, año lo puse en ingles por si no me toma bien la Ñ.

function Auto(marca, modelo, year){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
}


//Declaro/genero un array de varios autos, usando el objeto Auto

const autos = [
    new Auto('Fiat','Palio',2000),
    new Auto('Ford','Fiesta',1996),
    new Auto('Volkswagen','Gol',2005),
    new Auto('Chevrolet','Corsa',2010),
    new Auto('Peugeot','106',1990),
];

//declaro variable de menu
let menu = 0;


do{
    menu = prompt("Por favor ingrese opción de lo que quiere realizar: 1-Ver Lista de Autos, 2-Ver Cantidad e autos 3-Ingresar Nuevo Auto, 0-Salir");

    switch (menu){
        case '0':
            break;

        case '1': //ver lista de autos, separando los items del array

            console.log("Lista de autos");
            console.log("");

            //recorro el array y muestro de a uno los elementos del mismo, para ser visualizados en la consola. Uso la funcion de .length por sid espues agrego mas autos
            for(let i=0; i< autos.length; i++){
                console.log("Marca: " + autos[i].marca + " / Modelo: " + autos[i].modelo + " / Año: " + autos[i].year);
            }

            break;

        case '2': //ver cantidad de autos

            console.log("Cantidad de autos en la lista: "+ autos.length);

            break;

        case '3': //agregar otro auto a la lista

            let marcaP = prompt("Ingresar Marca");
            let modeloP = prompt("Ingresar Modelo");
            let yearP = prompt("Ingresar Año");

            autos.push(new Auto(marcaP, modeloP, yearP));  //agregamos lo ingresado a array

            alert("Agregado");

            break;

        default: //si se ingresa otra opcion no valida

            alert("Por favor Ingrese una opción válida");

    }

}while(menu!=0)
