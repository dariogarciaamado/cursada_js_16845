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
    new Auto('Chery', 'QQ', 2014),
    new Auto('Citroen', 'C3', 2007)
];


console.log("Lista de autos:");
console.log("");

//recorro el array y muestro de a uno los elementos del mismo, para ser visualizados en la consola. Uso la funcion de .length por sid espues agrego mas autos

for(let i=0; i< autos.length; i++){
    console.log("Marca: " + autos[i].marca + " / Modelo: " + autos[i].modelo + " / Año: " + autos[i].year);
}

console.log("");
console.log("");
console.log("");

console.log("Lista de autos ordenados por año:");
console.log("");




//ordenamos por año de menor a mayor, tomando como criterio el año de fabricación.

//formula para reeordenar el array
autos.sort((a, b) => a.year - b.year);

  //imprimo el array ordenado

  for(let i=0; i< autos.length; i++){
    console.log("Marca: " + autos[i].marca + " / Modelo: " + autos[i].modelo + " / Año: " + autos[i].year);
}