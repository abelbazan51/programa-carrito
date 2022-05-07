let datos = prompt("ingrese su nombre y apellido ");

let direccion = prompt("indique la direccion de su domicilio");
console.log("envio para " + datos + " ala direccion " + direccion);
let productos = prompt(
  "ingresa un producto de nuestra lista " +
    "\nhamburguesas" +
    "\nmilanesas gigantes" +
    "\npapas " +
    "\npizzas" +
    "\nempanadas"
);

let cantidad = parseInt(prompt("que cantidad quiere ? "));
let vuelto = parseInt(prompt("indique con cuanto va a abonar"));
let total;
switch (productos) {
  case "hamburguesas":
    total = cantidad * 450;

  case "milanesas gigantes":
    total = cantidad * 1000;
    break;
  case "papas":
    total = cantidad * 200;
    break;
  case "pizzas":
    total = cantidad * 500;
    break;
  case "empanadas":
    total = cantidad * 600;
    break;

  default:
    alert("esa opcion no esta disponible");
    break;
}
console.log("el precio es $" + total);
alert(
  "ya estamos preparando su pedido muchas grasias " +
    datos +
    "lo llevaremos a " +
    direccion +
    " apenas este hasta pronto "
);
console.log("el cliente va a abonar con $" + vuelto);

//let n2 = parseInt(prompt("ingresa un numero"));
//let n3 = parseInt(prompt(" "));
//function sumar(num1, num2, num3) {
// alert("el resultado de la sumaa es " + (num1 + num2 + num3));
//}
//sumar(n1, n2, n3);

//let nombre = prompt("ingresa tu nombre");
//console.log(
//"este es nuestro catalogo de nuestros productos " +
//"\nhamburguesa" + "\nempanadas" + "\nmilanesas";
//);
//let vari = parseInt(prompt());
//let resultado = 0;
//console.log(resultado);
//function sumar(num1, num2) {
// resultado = num1 + num2;
//}
//function mostrar(mensaje) {
// console.log(mensaje);
//}
//sumar(vari, 5);
//mostrar(resultado);
//

//let result = 0;
//function restar(num1, num2) {
//  result = num1 - num2;
//}
//restar(23, 4);

//console.log(result);

//let nombre = "dante";
//let edad = 34;
//let direccion = "calle falsa 123";
//console.log(nombre + " " + edad + " " + direccion);

//datos de un usuario
//const abelbazan51 = {
//nombre: "abel",
//edad: 29,
//direccion: "la paternal 591",
//};
