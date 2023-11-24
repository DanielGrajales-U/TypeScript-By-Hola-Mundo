//Ahora si veamos los tipos basicos que podemos usar en TypeScript

/** Tipos de JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 *
 * Tipos de TS
 * any (No usarlo, permite usar cualquier tipo en una variable)
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 *
 * Tipos inferidos(Cuando iniciemos una variable TypeScript)
 * */
/*
Si iniciamos una variable no es necesario usar 
:tipo ya que el tipo inferido que entrega typescript ya 
define el tipo con el tipo del valor que le estamos dando
*/
/**Puedes usarlo como te funcione para lo que quieres hacer
 * Si la variable no va a estar iniciada usa :tipo
 * De lo contrario no hace falta
 * */

let ecmascript = 2016;
let codeEditor: string;

let lenguage = 'TypeScript';
let tiped = true;

codeEditor = 'Visual Studio Code';

//Funciones con un parametro
function greet(name: string) {
  return `Hola ${name}`;
}

//Funcion con multiples parametros
const createObject = ({ name, age, email }: { name: string; age: number; email: string }) => {
  return {
    nombre: name,
    edad: age,
    correo: email,
  };
};

/**Arrays
 * Definicion 1 tipo[]
 * Definicion 2 Array<tipo>
 * Las dos funcionan perfectamente asi que usa la que mas te guste
 **/

let animals: string[] = ['Dog, Cat, Bird'];
let nums: Array<number> = [1, 2, 3, 4];

//Para definir un array de varios tipos podemos usar lo siguiente
let arrayVariable: (number | string)[] = [1, 'Types', 2, 'Hi'];

let arrayVariable2: Array<number | string> = [1, 'Types', 2, 'Hi'];

//Tuplas (Es una variable que contiene un set de datos que estan ordenados)
//se define con :[tipos]

let tupla: [number, string, string[]] = [1, 'Node', ['TypeScript', 'JavaScript', 'ReactJs']];

/*
Enum es un tipo de dato que permite definir un
conjunto de constantes con nombres simbólicos.
Un enum es útil cuando se tiene un conjunto fijo 
y conocido de valores que representan categorías,
estados o opciones
*/

/*
Se crea partiendo de un enum nombre-enum
(PascalCase) y ya podemos crear nuestro objeto
contenedor
*/
enum Size {
  Small = 's',
  Middle = 'm',
  Big = 'l',
  ExtraBig = 'xl',
}

/*
Enum que representa los posibles estados de carga
en una aplicación
*/

const enum LoadingState {
  Idlem,
  Loading,
  Success,
  Error,
}

/*
Hacemos que la variable que almacena el estado sea del 
tipo LoadingState
*/
let state: LoadingState;

state = LoadingState.Loading; //Ahora la variable state solo podra ser igual a Idlem, Loading, Success o Error

//Objetos
const firstObject = {
  id: 1,
};

/*
Normalmente si quisieramos agregar una nueva propiedad a este 
objeto en Javascript hariamos algo asi
*/

//firstObject.name = 'TypeScript' 

/*
Sin embargo esto nos daria error en TypeScript ya
que debemos de dejar todas las propiedades
definidas al inicializar el objeto
*/
//Podemos definir todo de la siguiente forma
const secondObject:{
    readonly id: number, //El readonly hace que la propiedad sea solo de lectura(NO MODIFICABLE)
    name: string,
    size: Size, //Usando el Enum Size anteriormente creado
    email?: string //El ? le dice al objeto que esta propiedad es opcional
} = {id: 1, name:'TypeScript', size: Size.Big}

/*
Como puedes ver en este caso tenemos definido todas 
las propiedades y sus tipos desde el inicio
*/


type Boock = { //Podemos tambien crear tipos y pasarselos a una variable
  id: number,
  title: string,
  author: string,
  editorial: string | string[],
}

const book: Boock = {
  id: 1,
  title: 'Typescript',
  author: '<NAME>',
  editorial: ['<NAME>'],
}
