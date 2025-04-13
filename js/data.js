export let productos = [
    {
        id: 1,
        nombre: 'SGML',
        fecha_creacion: '1986',
        fecha_defuncion: '1994',
        imagen: '/img/Product/SGML.svg',
        wiki: 'https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language',
        personas: [], // Ninguna persona listada participó directamente
        entidades: [{id: 3}] // ISO
    },
    {
        id: 2,
        nombre: 'XML',
        fecha_creacion: '1998',
        fecha_defuncion: '',
        imagen: '/img/Product/XML.png',
        wiki: 'https://en.wikipedia.org/wiki/XML',
        personas: [], // No fue creado directamente por Tim
        entidades: [{id: 1}] // W3C
    },
    {
        id: 3,
        nombre: 'HTML',
        fecha_creacion: '1993',
        fecha_defuncion: '',
        imagen: '/img/Product/HTML.png',
        wiki: 'https://en.wikipedia.org/wiki/HTML',
        personas: [{id: 1}], // Tim Berners-Lee
        entidades: [{id: 2}, {id: 1}] // CERN (desarrollo), W3C (posterior estandarización)
    },
    {
        id: 4,
        nombre: 'HTTP',
        fecha_creacion: '1991',
        fecha_defuncion: '',
        imagen: '/img/Product/HTTP.png',
        wiki: 'https://en.wikipedia.org/wiki/HTTP',
        personas: [{id: 1}], // Tim Berners-Lee
        entidades: [{id: 2}, {id: 1}] // CERN, W3C
    },
    {
        id: 5,
        nombre: 'CSS',
        fecha_creacion: '1996',
        fecha_defuncion: '',
        imagen: '/img/Product/CSS.png',
        wiki: 'https://en.wikipedia.org/wiki/CSS',
        personas: [{id: 3}], // Håkon Wium Lie
        entidades: [{id: 1}] // W3C
    },
    {
        id: 6,
        nombre: 'JavaScript',
        fecha_creacion: '1995',
        fecha_defuncion: '',
        imagen: '/img/Product/JavaScript.png',
        wiki: 'https://en.wikipedia.org/wiki/JavaScript',
        personas: [{id: 4}], // Brendan Eich
        entidades: [] // Netscape no está en tus entidades
    }
];
export let personas = [
    {
        id: 1,
        nombre: 'Tim Berners-Lee',
        fecha_nacimiento: '1955',
        fecha_defuncion: '',
        imagen: '/img/Inventor/Tim_Berners-Lee.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Tim_Berners-Lee',
    },
    {
        id: 2,
        nombre: 'Vannevar Bush',
        fecha_nacimiento: '1890',
        fecha_defuncion: '1974',
        imagen: '/img/Inventor/Vannevar_Bush.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Vannevar_Bush',
    },
    {
        id: 3,
        nombre: 'Hakon Wium Lie',
        fecha_nacimiento: '1965',
        fecha_defuncion: '',
        imagen: '/img/Inventor/Hakon-Wium-Lie.jpg',
        wiki: 'https://en.wikipedia.org/wiki/H%C3%A5kon_Wium_Lie',
    },
    {
        id: 4,
        nombre: 'Brendan Eich',
        fecha_nacimiento: '1961',
        fecha_defuncion: '',
        imagen: '/img/Inventor/Brendan_Eich.jpg',
        wiki: 'https://en.wikipedia.org/wiki/Brendan_Eich',
    }
];
export let entidades = [
    {
        id: 1,
        nombre: 'W3C',
        fecha_creacion: '1994',
        fecha_defuncion: '',
        imagen: '/img/Entity/W3C.svg',
        wiki: 'https://en.wikipedia.org/wiki/World_Wide_Web_Consortium',
        personas: [{id: 1}], // Tim Berners-Lee fundó W3C
    },
    {
        id: 2,
        nombre: 'CERN',
        fecha_creacion: '1954',
        fecha_defuncion: '',
        imagen: '/img/Entity/CERN.png',
        wiki: 'https://es.wikipedia.org/wiki/CERN',
        personas: [{id: 1}], // Tim Berners-Lee trabajó allí cuando inventó la Web
    },
    {
        id: 3,
        nombre: 'ISO',
        fecha_creacion: '1946',
        fecha_defuncion: '',
        imagen: '/img/Entity/ISO.svg',
        wiki: 'https://en.wikipedia.org/wiki/International_Organization_for_Standardization',
        personas: [], // Ninguno de los listados
    },
];

export let users = [
    {username: 'x', password: 'x'},
    {username: 'y', password: 'y'},
    {username: 'z', password: 'z'}
]