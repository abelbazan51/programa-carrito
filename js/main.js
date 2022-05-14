let datos = prompt("ingrese su nombre y apellido ");

let direccion = prompt("indique la direccion de su domicilio");
console.log("envio para " + datos + " ala direccion " + direccion);

const prod1 = {
  nombre: "hamburguesas",
  precio: 450,
};
const prod2 = {
  nombre: "milanesas gigantes",
  precio: 1000,
};
const prod3 = {
  nombre: "papas",
  precio: 200,
};
const prod4 = {
  nombre: "pizzas",
  precio: 500,
};
const prod5 = {
  nombre: "empanadas",
  precio: 600,
};
const prod = [prod1, prod2, prod3, prod4, prod5];
console.log(prod);

let productos = prompt(
  "ingresa un producto de nuestra lista " +
    "\nhamburguesas" +
    "\nmilanesas gigantes" +
    "\npapas " +
    "\npizzas" +
    "\nempanadas"
);

let cantidad = parseInt(prompt("que cantidad quiere ? "));
console.log(cantidad + " " + productos);
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

console.log("el cliente va a abonar con $" + vuelto);

if (vuelto === total) {
  console.log("el cliente abona con la plata justa");
  alert("muchas grasias el pedido esta en proceso");
}
if (vuelto > total) {
  console.log(
    "nuesto delivery devera llevar un total de $",
    vuelto - total,
    "para darle cambio al cliente"
  );
}
if (vuelto < total) {
  console.log("el cliente indico un monto menos al precio del producto ");
}

//class producto {
//constructor(nombre, precio, id) {
//this.nombre = nombre;
//this.precio = precio;
//this.id = id;

//const hamburguesas = new hamburguesas("hamburguesas", 450, 1234);
//const pizzas = new pizzas("pizza", 600, 2223);
//const papas = new papas("papas", 200, 2044);
//const empanadas = new empanadas("empanadas");
//const milanesas = new milanesas("milanesas gigantes");
//const prod = [hamburguesas, pizzas, papas, empanadas, milanesas];
//  console.log(prod);
//}
//}

//este es el fin del programa golomax
