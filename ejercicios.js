// Ejercicio 01
// 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
const myFavoriteHero = 'Hulk';
// 1.2 Crea una variable llamada x, asigna el valor 50 a ella.
const x = 50;
// 1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
const h = 5;
const y = 10;
// 1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.
const z = h + y;

// Ejercicio 02
// 1.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25.

const character = {
  name: 'Jack Sparrow',
  age: 10
};
character.age = 25;

// 2.2

firstName = 'Jon';
lastName = 'Snow';
age = 24;

console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`
);

//2.3 imprime con un console.log la suma del precio de ambos juguetes.

const toy1 = { name: 'Buss myYear', price: 19 };
const toy2 = { name: 'Rallo mcKing', price: 29 };

console.log(toy1.price + toy2.price);

//2.4 actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.

let globalBasePrice = 10000;
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000;
car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;

// Ejercicio 3
// Multiplica 10 por 5 y muestra el resultado mediante console
console.log(10 * 5);

// 3.2 Divide 10 por 2 y muestra el resultado en un console.
console.log(10 / 2);

// 1.3 Muestra mediante un console el resto de dividir 15 por 9.
console.log(15 % 9);

// 3.3 Usa el correcto operador de asignación que resultará en o = 15, teniendo dos variables p = 10 y j = 5.
p = 10;
j = 5;
const o = p + j; //no entiendo a qué se refieren con operador de asignación si tengo que crear una tercera variable o para obtener el resultado
//? podría hacer p+=j y que p sea 15 🤷‍♀️

//3.4 Usa el correcto operador de asignación que resultará en i = 50, teniendo dos variables
c = 10;
m = 5;
const i = c * m;

// Ejercicio 4

// 4.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
console.log(avengers[0]);

// 4.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers[0] = 'IRONMAN';

// 4.3 console numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.length);

// 4.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry'];
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

// 4.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
];
rickAndMortyCharacters2.pop();
console.log(
  rickAndMortyCharacters2[0],
  rickAndMortyCharacters2[rickAndMortyCharacters2.length - 1]
);

// 4.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);

// Ejercicio 5
// En base al código siguiente, muestra los mensajes correctos por consola.
const number1 = 10;
const number2 = 20;
const number3 = 2;
// ejemplo
if (number1 === 10) {
  console.log('number1 es estrictamente igual a 10');
}
if (number2 / number1 == 2) {
  console.log('number2 dividido entre number1 es igual a 2');
}
if (number1 !== number2) {
  console.log('number1 es estrictamente distinto a number2');
}
if (number3 != number1) {
  console.log('number3 es distinto number1');
}
if (number3 * 5 == number1) {
  console.log('number3 por 5 es igual a number1');
}
if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(
    'number3 por 5 es igual a number1 Y number1 por 2 es igual a number2'
  );
}
if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(
    'number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3'
  );
}

// Ejercicio 6
// 7.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//7.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.

for (let i = 0; i < 9; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 7.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a 'Dormido!'.

for (let i = 1; i <= 10; i++) {
  if (i == 10) {
    console.log('Dormido!');
  } else {
    console.log('Intentando dormir 🐑');
  }
}

// Ejercicio 7: Completa la función que tomando dos números como argumento devuelva el más alto.

const highestNumber = (num1, num2) => (num1 > num2 ? num1 : num2);

// Ejercicio 8: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero

const avengers2 = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
];
function findLongestWord(param) {
  let longestWord = '';
  for (const string of param) {
    if (string.length > longestWord.length) {
      longestWord = string;
    }
  }
  return longestWord;
}
// O con ES6:
// function findLongestWord(array) {
//   return array.reduce(
//     (acc, next) => (acc.length >= next.length ? acc : next),
//     ''
//   );
//}

console.log(findLongestWord(avengers2));

// Ejercicio 9: Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
const numbers2 = [1, 2, 3, 5, 45, 37, 58];
function sumAll(param) {
  let sum = 0;
  for (const number of param) {
    sum += number;
  }
  return sum;
}
// O con ES6:
// function sumar(array) {
//   return array.reduce((acc, next) => acc + next, 0)
// }
console.log(sumAll(numbers2));

// Ejercicio 10: hacer una función que calcule el promedio de un array de números

const average = (numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  let avg = sum / numbers.length;
  return avg;
};

console.log(average([12, 21, 38, 5, 45, 37, 6]));

// Ejercicio 11: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
function averageWord(param) {
  let sum = 0;
  for (const element of param) {
    if (typeof element === 'string') {
      sum += element.length;
    } else if (typeof element === 'number') {
      sum += element;
    }
  }
  return sum;
}

console.log(
  averageWord([6, 1, 'Rayo', 1, true, 'vallecano', '10', 'upgrade', 8, 'hub'])
);

// Ejercicio12: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(array) {
  let arrayWithoutDuplicates = [];
  for (const element of array) {
    if (!arrayWithoutDuplicates.includes(element)) {
      arrayWithoutDuplicates.push(element);
    }
  }
  return arrayWithoutDuplicates;
}

console.log(removeDuplicates(duplicates));

// Ejercicio 13: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.
function finderName(array, name) {
  if (array.includes(name)) {
    return [true, array.indexOf(name)];
  } else {
    return false;
  }
}

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xavier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

console.log(finderName(nameFinder, 'Steve'));

// Ejercicio 14: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

function repeatCounter(array) {
  const wordCounter = {};
  for (const item of array) {
    if (!(item in wordCounter)) {
      wordCounter[item] = 1;
    } else {
      wordCounter[item] += 1;
    }
  }
  return wordCounter;
}

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

console.log(repeatCounter(counterWords));

// Ejercicio 15: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
];

for (const item of products) {
  if (item.toLowerCase().includes('camiseta')) {
    console.log(item);
  }
}

// Ejercicio 16: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
];

for (const destination of placesToTravel) {
  console.log(destination);
}

// Ejercicio 17: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
};

for (const key in alien) {
  console.log(alien[key]);
}

// Ejercicio 18: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array.

const placesToGo = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Madrid' }
];
const placesToGoCopy = placesToGo.slice();
for (let i = 0; i < placesToGoCopy.length; i++) {
  if (placesToGoCopy[i]['id'] === 11 || placesToGoCopy[i]['id'] === 40) {
    placesToGoCopy.splice([i], 1);
  }
}

console.log(placesToGoCopy);

// Ejercicio 19: Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo.

const toys = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 }
];
const toys2 = [];

for (const toy of toys) {
  if (!toy['name'].includes('gato')) {
    toys2.push(toy);
  }
}

console.log(`Array sin gatos:`, toys2);

// Ejercicio 20: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.

const getPopularToys = (listOfToys) => {
  const popularToys = [];
  for (const toy of listOfToys) {
    if (toy.sellCount > 15) {
      popularToys.push(toy);
    }
  }
  return popularToys;
};

console.log(
  `Lista de juguetes mas populares (más de 15 ventas):`,
  getPopularToys(toys)
);

// Ejercicio 21: Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
];

const menoresDeEdad = [];
const mayoresDeEdad = [];

for (let i = 0; i < users.length; i++) {
  const user = users[i];

  if (user.years < 18) {
    menoresDeEdad.push(user);
  } else {
    mayoresDeEdad.push(user);
  }
}
console.log('Usuarios menores de edad:', menoresDeEdad);
console.log('Usuarios mayores de edad:', mayoresDeEdad);

// Ejercicio 22: Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
];

const veganator = (foods) => {
  let fruitCounter = 0;
  for (const food of foods) {
    if (!food.isVegan) {
      food.name = fruits[fruitCounter];
      fruitCounter++;
      food.isVegan = true;
    }
  }
  return foods;
};

console.log(veganator(foodSchedule));

// Ejercicio 23: Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
];

const shortMovies = [];
const medMovies = [];
const longMovies = [];

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    shortMovies.push(movies[i]);
  } else if (movies[i].durationInMinutes > 200) {
    longMovies.push(movies[i]);
  } else {
    medMovies.push(movies[i]);
  }
}
console.log(shortMovies);
console.log(medMovies);
console.log(longMovies);

// Ejercicio 24: Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.
const productos = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
];
let totalSales = 0;
for (let i = 0; i < productos.length; i++) {
  totalSales += productos[i].sellCount;
}
console.log(totalSales);

// Ejercicio 25: mostrar por consola la media de ventas.

console.log(totalSales / productos.length);

// Ejercicio 26: Usa un bucle para recorrer el array de productos y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.
const goodProducts = [];
const badProducts = [];

for (let i = 0; i < productos.length; i++) {
  if (productos[i].sellCount < 20) {
    goodProducts.push(productos[i]);
  } else {
    badProducts.push(productos[i]);
  }
}

console.log(badProducts);
console.log(goodProducts);
