const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1300, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];

function Servicio(id, nombre, precio, img){
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  this.img = img;
}
const nuevoServicio = new Servicio(10, "depi",3550, "img.jpg");

function crearServicio(){
 let id= prompt("Ingresa id");
  let nombre= prompt("Ingresa nombre");
  let precio= prompt("Ingresa precio");
  let img= prompt("Ingresa img");
 const nuevoServicio = new Servicio(id, nombre,precio, img);

 return nuevoServicio;
}
//crearServicio()
 function cargarServicio(arr, valor){
    arr.push(valor);
 }

 cargarServicio(servicios,nuevoServicio);
//console.log(nuevoServicio);
console.log(servicios);

//funciones de filtrado
function findServices(arr,filtro){
  const encontrado = arr.find((servicio)=>{
    //Aqui tengo un problema
    //return servicio.nombre == filtro;
    return servicio.nombre.includes(filtro);
  })
return encontrado;
}





//filtrar filter
function filtrarPorPrecio(arr, filtro){
    return arr.filter((servicio)=>{
        return servicio.precio <= filtro;
    })
}
//funcion generica
const filtrar = (arr, filtro, param)=>{

    return arr.filter(el=>{
      if(param == "precio"){
        return el[param] <= parseFloat(filtro); 
      }
      else if(param == "id"){
        return el[param] == parseFloat(filtro); 
      }
      else{
        return el[param].includes(filtro)
      }
    })

}

const filtroPrecio= filtrar(servicios, 2500, "precio")
const porNombre= filtrar(servicios, "masa", "nombre")
const porId= filtrar(servicios, 3, "id")

console.log(filtroPrecio);
console.log(porNombre);
console.log(porId);


const menorPrecio= filtrarPorPrecio(servicios, 2500)

//console.log(menorPrecio);
const carrito=[]

//
let servicioEncontrado = findServices(servicios,"masa");
let servicioEncontrado2 = findServices(servicios,"manic");

//console.log(carrito);

cargarServicio(carrito, servicioEncontrado)
cargarServicio(carrito, servicioEncontrado2)
//console.log(carrito);

let precioFinal = carrito.reduce((acc, el)=>{

  return acc + el.precio;

}, 0)
//console.log(precioFinal);