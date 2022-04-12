// 1.Variables

// Crea un cuadro de diálogo (alert) que muestre lo siguiente “JavaScript funcionando correctamente”
// alert("JavaScript funcionando correctamente");

let variableSinValor;
let booleano1 = true;
let booleano2 = false;

const PI = 3.1416;
const TAU = PI * 2;
const miNombre = "Yorch";
let miNumeroFav = 13;
const variable = true;

// Muestra por consola la longitud de la variable miNombre

console.log(miNombre.length);

// Muestra por consola el tipo de dato de la variable miNumeroFav

console.log(typeof miNumeroFav);

// Muestra un console.log que diga ‘Mi nombre es Euralio y mi numero favorito es 7” concatenado variables declaradas más arriba.

console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`);

// Muestra por consola “Seré un crack en JavaScript al terminar el bootcamp” en mayúsculas.

const crack = "Seré un crack en JavaScript al terminar el bootcamp";
console.log(crack.toUpperCase());

// Muestra por consola solo los primeros 5 caracteres de la siguiente variable = ‘Hola soy un crack”

const cadena = "Hola soy un crack";
const subCadena = cadena.slice(0,5);
console.log(subCadena);


// Convierte la variable miNumeroFav en una string y luego muestra por consola el tipo de dato que es dicha variable

let convert = miNumeroFav.toString();
console.log(typeof convert);    

//Crea una variable, concaténala utilizando template literal, guarda el template literal en otra variable y sacala por consola.

const template = "Escape from Tarkov";
const subTemplate = `Mi juego favorito es ${template}`;
console.log(subTemplate);

// Muestra por consola la variable PI hasta los 2 primeros decimales

console.log( PI.toFixed(2));

// 2. Arrays

const arrayVacio = [];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arrayNumerosPares = [0, 2, 4, 6, 8];
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ['Hola', 'Mundo'];
const loGuardoTodo = ['Hola', 'que', 23, 42.33, 'tal'];
const arrayDeArrays =[[756,'nombre'],[225,'apellido'],[298,'direccion']];

// Muestra por consola la longitud del array “loGuardoTodo”

console.log(loGuardoTodo.length);

// Crea un nuevo elemento y añadelo al final del array “loGuardoTodo” y muestralo por consola

loGuardoTodo.push ("pascual");
console.log(loGuardoTodo);

// Ordena de mayor a menor la variable arrayNumeros y muestrala por consola

console.log(arrayNumeros.reverse());

// Ordena de menor a mayor la variable arrayNumeros2 y muestrala por consola

console.log(arrayNumeros2.sort((a,b)=>b-a));

// Muestra por consola la propiedad ‘que’ de la variable loGuardoTodo

const index = loGuardoTodo.indexOf('que');
console.log(loGuardoTodo[index]);

// Añade la propiedad ‘Euralio’ en la array loGuardoTodo y muestrala por consola

loGuardoTodo.push('Euralio');
console.log(loGuardoTodo);


// 3. Objetos

const coche = {
    marca: "Ford",
    modelo: "Mustang",
    matricula: "5657JHK",
};

const casa = {
    codPostal: 7840,
    calle: "Margaritas",
    portal:1,
    piso:1,
};

const FullStackDeveloper = {
    lenguajes: ['JavaScript', 'PHP'],
    proyectos: ['Mi página personal', 'Web responsive'],
};

const perro = {
    nombre: "Noa",
    raza: "Ratonero Mallorquin",
    color: "Negro",
    edad: 5,
};

const noticia = {
    titular: "Esto es titular",
    cuerpo: "Esto es notcia",
};

const persona = {
    nombre: "Jorge",
    apellidos: "Campo",
    edad: 39,
}
// Muestra por consola el nombre de la variable persona
console.log(persona.nombre);

// Muestra por consola lengiaje JavaScript de la variable FullStackDeveloper
console.log(FullStackDeveloper.lenguajes[0]);

// Crea objeto de nombre Portatil y propiedad marca y muestra esta por consola
const portatil = {
    marca: "HP",
    modelo: "Omen",
}
console.log(portatil.marca);

// Obten valor marca con ['marca']
console.log(portatil['marca']);

// Crea un objeto de nombre Concierto con una propiedad llamada grupos que es un array, obtén el valor de la propiedad y muestrala por consola

const concierto = {
    grupos: ['Metallica', 'Slipknot', 'Megadeth'],
}
console.log(concierto.grupos);

// Crea un objeto de nombre Led, con las propiedades: rojo, verde y azul, obtén el valor de las propiedades guardándolo en la variable array RGB[Rojo, Verde, Azul] y muestra este array por consola

const led = {
    rojo: 125,
    verde: 235,
    azul: 87,
};

const RGB = [(led.rojo),(led.verde),(led.azul)];
console.log(RGB);

// Crea un objeto de nombre O_Error con la propiedad código, obtén el valor de la propiedad y muestrala por consola

const O_Error = {
    codigo: 137,
};
console.log (O_Error.codigo);

// Crea un objeto de nombre Grupo con la propiedad integrantes (array),obtén el valor de la propiedad guardándolo en la variable integrantes y muestra por consola a uno de los integrantes

const grupo = {
    integrantes: ["James", "Lars", "Kirk", "Rob"],
};
const integrantes = [grupo.integrantes[0]];
integrantes.push(grupo.integrantes[1]);
integrantes.push(grupo.integrantes[2]);
integrantes.push(grupo.integrantes[3]);

console.log (integrantes[0]);

// Crea un objeto de nombre Impresora con la propiedad objeto tinta{rojo, verde, azul}, obtén el valor de la propiedad guardándolo en la variable nivelesTinta y muestrala por consola

const impresora = {
    tinta: {
        rojo: 10,
        verde: 20,
        azul: 30,
    } 
};

const nievelesTinta = [impresora.tinta.rojo];
nievelesTinta.push(impresora.tinta.verde);
nievelesTinta.push(impresora.tinta.azul);
console.log(nievelesTinta);

// Crea un objeto de nombre Movil con la propiedad especificaciones obtén el valor de la propiedad con ["especificaciones"] guardándolo en la variable especificaciones y muestrala por consola

const movil = {
    especificaciones: ["5G", "Ultra wide", "plegable"],
};
const especificaciones = movil.especificaciones;
console.log(especificaciones);

// Dado el objeto de nombre Portatil con la propiedad marca, modifica el valor de la propiedad marca por el valor “MSI”, consolea el resultado

portatil.marca = "MSI";
console.log(portatil.marca);

// Dado el objeto de nombre Concierto añade el valor Guns N' Roses a la propiedad grupos, consolea el resultado

concierto.grupos.push("Guns N' Roses");
console.log (concierto.grupos);

// Dado el objeto de nombre Concierto, crea la propiedad fecha, dale un valor y después modifica el valor de la propiedad por el valor new Date() (fecha de hoy), consolea el resultado

concierto.fecha = "01/01/2022";
concierto.fecha = new Date();
console.log(concierto.fecha);


// Dado el objeto de nombre Grupo modifica el valor de la propiedad integrantes quitándole un integrante, consolea el número de integrantes actual (ojo! el número, no los nombres de los integrantes)

grupo.integrantes.pop();
console.log(grupo.integrantes.length);