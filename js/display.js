console.log('App.js cargado');

import { personas, entidades, productos } from './data.js';


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
    more.href = `/model.html?${type}=${item.id}`;
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