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

function createItemCard(item, type) {
    const card = document.createElement('div');
    card.className = 'item-card';

    // Crear contenedor de información
    const info = document.createElement('div');
    info.className = 'item-info';

    // Crear nombre
    const name = document.createElement('h3');
    name.className = 'item-name';
    name.textContent = item.nombre;
    info.appendChild(name);

    // Crear botón "Saber más"
    const more = document.createElement('a');
    more.className = 'item-more';
    more.href = `model.html?${type}=${item.id}`;
    more.textContent = 'Saber más';
    more.onclick = (e) => {
        e.preventDefault();
        window.location.href = more.href;
    };
    info.appendChild(more);

    // Crear imagen
    const img = document.createElement('img');
    img.className = 'item-image';
    img.src = item.imagen;
    img.alt = item.nombre;

    // Hacer que toda la tarjeta sea clicable
    card.style.cursor = 'pointer';
    card.onclick = () => {
        window.location.href = more.href;
    };

    // Añadir elementos a la tarjeta
    card.appendChild(info);
    card.appendChild(img);

    return card;
}

function displayItems() {
    // Mostrar productos
    const productsList = document.getElementById('products-list');
    productos.forEach(producto => {
        productsList.appendChild(createItemCard(producto, 'product'));
    });

    // Mostrar inventores
    const inventorList = document.getElementById('Inventor-list');
    personas.forEach(persona => {
        inventorList.appendChild(createItemCard(persona, 'person'));
    });

    // Mostrar entidades
    const entitiesList = document.getElementById('Entities-list');
    entidades.forEach(entidad => {
        entitiesList.appendChild(createItemCard(entidad, 'entity'));
    });
}

// Ejecutar cuando el DOM esté cargado
window.addEventListener('DOMContentLoaded', displayItems);