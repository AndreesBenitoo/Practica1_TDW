console.log('App.js cargado');

import { personas, entidades, productos } from './data.js';
const botonprueba = document.getElementById("prueba");

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
    div.className = 'product-item';
    div.innerHTML = '<div id = "img-'+nombre+'"><img src= "'+imagen+'" alt="Imagen '+nombre+'"></div><a href="model.html?product='+id+'">'+nombre+'</a>'; //Lo del enlace lo he puesto temporal
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
    div.className = 'person-item';
    div.innerHTML = '<div id = "img-'+nombre+'"><img src= "'+imagen+'" alt="Imagen '+nombre+'"></div><a href="/model.html?person='+id+'">'+nombre+'</a>'; //Lo del enlace lo he puesto temporal
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
    div.className = 'entity-item';
    div.innerHTML = '<div id = "img-'+nombre+'"><img src= "'+imagen+'" alt="Imagen '+nombre+'" ></div><a href="/model.html?entity='+id+'">'+nombre+'</a>'; //Lo del enlace lo he puesto temporal
    //Append Child
    entities.appendChild(div);
}

//Atm it is unused, delete later
function URLify(string) {
    return string.trim().replace(/\s/g, '%20'); 
  }

window.addEventListener('load',() => {initialIjection()})