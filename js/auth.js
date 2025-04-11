import {users} from './data.js';

//Elementos del DOM
const loginForm = document.getElementById('login-form');
const userInfo = document.querySelector('.user-info');
const currentUserSpan = document.getElementById('current-user');
const btnLogin = document.getElementById('btnLogin');
const btnLogout = document.getElementById('btnLogout');
const btnAddProduct = document.getElementById('btnAddProduct');
const btnAddInventor = document.getElementById('btnAddInventor');
const btnAddEntity = document.getElementById('btnAddEntity');



function updateUI(isLoggedIn, username = ''){
    if (isLoggedIn){
        loginForm.style.display = 'none';
        userInfo.style.display = 'block';
        btnLogout.style.display = 'block';
        currentUserSpan.textContent = username;   

        //Mostrar botones de agregar
        btnAddProduct.style.display = 'block';
        btnAddInventor.style.display = 'block';
        btnAddEntity.style.display = 'block';
    } else {
        loginForm.style.display = 'block';
        userInfo.style.display = 'none';
        btnLogout.style.display = 'none';
        currentUserSpan.textContent = '';

        //Ocultar botones de agregar    
        btnAddProduct.style.display = 'none';   
        btnAddInventor.style.display = 'none';
        btnAddEntity.style.display = 'none';
    }
}

//Evento de login
btnLogin.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //valido las credenciales
    const user = users.find(u => u.username === username && u.password === password);

    if (user){
        updateUI(true, username);
        alert ('Login exitoso');
    } else {
        alert('Usuario o contraseña incorrectos');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }
});

//Evento de logout
btnLogout.addEventListener('click', () => {
    updateUI(false);
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

//Inicializar UI
updateUI(false);