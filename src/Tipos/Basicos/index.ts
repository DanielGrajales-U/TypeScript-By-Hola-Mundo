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
/*Si iniciamos una variable no es necesario usar 
:tipo ya que el tipo inferido que entrega typescript ya define el tipo con el tipo del valor que le estamos dando
*/
/**Puedes usarlo como te funcione para lo que quieres hacer
 * Si la variable no va a estar iniciada usa :tipo
 * De lo contrario no hace falta
 * */

let ecmascript = 2016
let codeEditor:string

let lenguage = 'TypeScript'
let tiped = true

codeEditor = 'Visual Studio Code'

//Funciones con un parametro
function greet(name:string){
    return `Hola ${name}`
}

//Funcion con multiples parametros
const createObject = ({name,age,email}:{name:string,age:number,email:string}) =>{
    return {
        nombre: name,
        edad: age,
        correo: email
    }
}

/**Arrays
 * Definicion 1 tipo[]
 * Definicion 2 Array<tipo>
 * Las dos funcionan perfectamente asi que usa la que mas te guste
**/ 

let animals: string[] = ['Dog, Cat, Bird']
let nums: Array<number> = [1,2,3,4]

//Para definir un array de varios tipos podemos usar lo siguiente
let arrayVariable: (number | string)[] = [1,'Types',2,'Hi']

let arrayVariable2: Array<number | string> = [1,'Types',2,'Hi']

//Tuplas (Es una variable que contiene un set de datos que estan ordenados)
//se define con :[tipos]

let tupla:[number, string, string[]] = [1, 'Node', ['TypeScript', 'JavaScript','ReactJs']]

