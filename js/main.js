let stockproductos = [
  {
    id: 1,
    nombre: "hamburguesas",
    cantidad: 40,
    desc: "hamburguesa con chedar y panceta",
    precio: 450,
    img: "https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.clarin.com%2Frecetas%2Fplatos-principales%2Fempanadas-saltenas_7_fEEsB1QkJ.html&psig=AOvVaw1P6XZR5YgIzOWi0lnMtJlv&ust=1653096089917000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjeivf48PcCFQAAAAAdAAAAABAD",
  },
  {
    id: 2,
    nombre: "papas fritas",
    cantidad: 40,
    desc: "bandeja de papas con cheddar",
    precio: 200,
    img: "https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.clarin.com%2Frecetas%2Fplatos-principales%2Fempanadas-saltenas_7_fEEsB1QkJ.html&psig=AOvVaw1P6XZR5YgIzOWi0lnMtJlv&ust=1653096089917000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjeivf48PcCFQAAAAAdAAAAABAD  ",
  },
];

const contenedorproductos = document.getElementById(`contenedor-productos`);
const contenedorcarrito = document.getElementById(`carrito-contenedor`);
const botonvaciar = document.getElementById(`vaciar-carrito`);
let carrito = [];
botonvaciar.addEventListener(`click`, () => {
  carrito.length = 0;
  actualizarcarrito();
});
stockproductos.forEach((producto) => {
  const div = document.createElement(`div`);
  div.classList.add(`producto`);
  div.innerHTML = `
  <img src=${producto.img} alt="">
  <h3>${producto.nombre}</h3>
  <p>${producto.desc}</p>
  <img src=${producto.img} alt"img>
  <p class="precioproducto"> precio:$ ${producto.precio} </p>
  <button id="agregar${producto.id}" class="boton-agregar">agregar<i class="fas fa-shopping-cart"></i> </button>
  `;
  contenedorproductos.appendChild(div);

  const boton = document.getElementById(`agregar${producto.id}`);

  boton.addEventListener(`click`, () => {
    agregaralcarrito(producto.id);
  });
});
const agregaralcarrito = (prodid) => {
  const item = stockproductos.find((prod) => prod.id === prodid);
  carrito.push(item);
  actualizarcarrito();
  console.log(carrito);
};
const eliminarcarrito = (prodid) => {
  const item = carrito.find((prod) => prod.id === prodid);
  const indice = carrito.indexOf(item);
  carrito.splice(indice, 1);
  actualizarcarrito();
};

const actualizarcarrito = () => {
  contenedorcarrito.innerHTML = "";
  carrito.forEach((prod) => {
    const div = document.createElement(`div`);
    div.className = `productoencarrito`;
    div.innerHTML = `
    <p>${prod.nombre}</p>
    <p> precio: ${prod.precio}</p>
    <p> cantidad: <span id="cantidad" > ${prod.cantidad}</span> </p>
  
    <button onclick ="eliminardelcarrito(${prod.id})" class="boton-eliminar"> <i class="fas fa-trash-alt</button>
    `;
    contenedorcarrito.appendChild(div);
  });
};
/* /et datos = prompt("ingrese su nombre y apellido ");

let direccion = prompt("indique la direccion de su domicilio");
console.log("envio para " + datos + " ala direccion " + direccion);

class producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const hambur = new producto("hamburguesa", 450);
const papa = new producto("papas", 200);
const pancho = new producto("panchos", 150);
const pizza = new producto("pizzas", 500);
const empanadas = new producto("empanadas", 600);
const product = [hambur, papa, pancho, empanadas, pizza];
console.log(product);

// return nombre;

const mostrarlista = () => {
  let texto = "estos son nuestros precios\n";
  product.forEach((element) => {
    texto += `${element.nombre} ${element.precio}$ \n`;
  });
  alert(texto);
};

mostrarlista();

let productos = prompt(
  "ingresa un producto de nuestra lista " +
    "\nhamburguesas" +
    "\nmilanesas gigantes" +
    "\npapas " +
    "\npizzas" +
    "\nempanadas"
);
while (productos === "") {
  productos = prompt(
    "ingresa un producto de nuestra lista " +
      "\nhamburguesas" +
      "\nmilanesas gigantes" +
      "\npapas " +
      "\npizzas" +
      "\nempanadas"
  );
}

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
  alert("muchas grasias por elegirnos su pedido esta en proceso");
}
if (vuelto < total) {
  console.log("el cliente indico un monto menos al precio del producto ");
  alert(
    `indicaste ${vuelto} por lo tanto no te alcanza para pagar el producto`
  );
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

//arrays funcionando

/*  
class producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const hambur = new producto("hamburguesa", 450);
const papa = new producto("papas", 200);
const pancho = new producto("panchos", 150);
const productos = [hambur, papa, pancho];
console.log(productos);

const saludar = () => {
  let nombre = prompt("bienvenidos a pelis plus , indique su nombre");
  while (nombre === "") {
    nombre = prompt("bienvenidos a pelis plus , indique su nombre");
  }
  // return nombre;
};

const mostrarlista = () => {
  let texto = "";
  productos.forEach((element) => {
    texto += `${element.nombre} ${element.precio} \n`;
  });
  alert(texto);
};

saludar();
mostrarlista(); */
