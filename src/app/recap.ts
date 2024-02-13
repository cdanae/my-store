const username: string = 'Danae'; // tambien se puede aplicar un OR para asignarle dos tipados, ej: string | number

const sum = (a: number, b: number) => {
  return a + b
} // al tipar los parametros se evitan errores de mandar argumentos no validos.

sum (1,2) // si se colocara un string, arroja un error: No se puede asignar un argumento de tipo "string" al parámetro de tipo "number".ts(2345)

class Person {
  age: number;
  lastName: string; // Sin un inicializador y sin un constructor marca un error

  constructor(age: number, lastName: string) {
    this.age /* esto es la variable */ = age; //esto es el parametro
    this.lastName = lastName;
  }
}

//otra forma mas corta de hacerlo es:
class Person2 {

  constructor(public age: number, public lastName: string) {}
  //Ya no se requiere inicializar, porque al colocar el acceso public o private, typescript lo entiende
}

const dana = new Person(15, 'Rodriguez')

dana.age
