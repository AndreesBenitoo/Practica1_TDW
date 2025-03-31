console.log('App.js cargado');

import { personas, entidades, productos } from './data.js';

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
