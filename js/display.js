console.log('App.js cargado');

import { personas, entidades, productos } from './data.js';
const botonprueba = document.getElementById("prueba");

console.log('Importación exitosa');
console.log('Productos:', productos);
console.log('Personas:', personas);
console.log('Entidades:', entidades);

// Ejemplos de acceso a datos
console.log('\n=== Ejemplos de acceso a datos ===');

// 1. Acceder a elementos específicos
console.log('\nPrimer producto:', productos[0]);
console.log('Primera persona:', personas[0]);
console.log('Primera entidad:', entidades[0]);

// 2. Acceder a propiedades específicas
console.log('\nNombre del primer producto:', productos[0].nombre);
console.log('Nombre de la primera persona:', personas[0].nombre);
console.log('Nombre de la primera entidad:', entidades[0].nombre);

// 3. Buscar por ID
console.log('\nBuscando producto con ID 1:', productos.find(p => p.id === 1));
console.log('Buscando persona con ID 1:', personas.find(p => p.id === 1));
console.log('Buscando entidad con ID 1:', entidades.find(e => e.id === 1));

// 4. Filtrar elementos
console.log('\nProductos activos (sin fecha de defunción):', 
    productos.filter(p => p.fecha_defuncion === ''));
console.log('Personas fallecidas:', 
    personas.filter(p => p.fecha_defuncion !== ''));

//Exec only once
function initialIjection(){
    productos.forEach(product => {
        addProduct(product.id,product.nombre,product.fecha_creacion,product.fecha_defuncion,product.imagen,product.wiki,product.personas,product.entidades);
    });
    personas.forEach(person => {
        addInventor(person.id,person.nombre,person.fecha_nacimiento,person.fecha_defuncion,person.imagen,person.wiki);
    });
    entidades.forEach(entity => {
        addEntity(entity.id,entity.nombre,entity.fecha_creacion,entity.fecha_defuncion,entity.imagen,entity.wiki,entity.personas);
    });
}

//Add product with product parameter given
function addProduct(id, nombre, fecha_creacion, fecha_defuncion, imagen, wiki, personas, entidades){
    //Select father element 
    let products = document.getElementById('products-list');
    //creation of new div
    let div = document.createElement('div');
    div.id = 'product-' + id;
    div.className = nombre;
    div.innerHTML = '<div id = "img-'+nombre+'"><img src= "'+imagen+'" alt="Imagen '+nombre+'"></div><a href="./html/entities/'+URLify(nombre)+".html"+'">'+nombre+'</a>'; //Lo del enlace lo he puesto temporal
    div.style = "column-img";
    //Append Child
    products.appendChild(div);
}

//Add person with Inventor parameter given
function addInventor(id, nombre, fecha_nacimiento, fecha_defuncion, imagen, wiki) {
    //Select father element 
    let people = document.getElementById('Inventor-list');
    //creation of new div
    let div = document.createElement('div');
    div.id = 'person-' + id;
    div.className = nombre;
    div.innerHTML = '<div id = "img-'+nombre+'"><img src= "'+imagen+'" alt="Imagen '+nombre+'"></div><a href="./html/entities/'+URLify(nombre)+".html"+'">'+nombre+'</a>'; //Lo del enlace lo he puesto temporal
    div.style = "column-img";
    //Append Child
    people.appendChild(div);
}

//Add entity with parameter given
function addEntity(id, nombre, fecha_creacion, fecha_defuncion, imagen, wiki, personas) {
    //Select father element 
    let entities = document.getElementById('Entities-list');
    //creation of new div
    let div = document.createElement('div');
    div.id = 'entity-' + id;
    div.className = nombre;
    div.innerHTML = '<div id = "img-'+nombre+'"><img src= "'+imagen+'" alt="Imagen '+nombre+'" ></div><a href="./html/entities/'+URLify(nombre)+".html"+'">'+nombre+'</a>'; //Lo del enlace lo he puesto temporal
    //Append Child
    entities.appendChild(div);
}

function URLify(string) {
    return string.trim().replace(/\s/g, '%20'); 
  }

window.addEventListener('load',() => {initialIjection()})