// seeccionamos lo elementos del html
const botonElm = document.querySelector('button');
const inputElm = document.querySelector('input');
const listaElm = document.querySelector('ul');

botonElm.addEventListener('click', () => {
    const valor = inputElm.value; //seleccionamos el valor que esta en el input
    const listaItemElm = document.createElement('li'); //se crea el elemento li que vamos a agregar
    listaItemElm.textContent = valor; //le vamos a agregar un contenido de texto 
    listaElm.appendChild(listaItemElm); // lo agrega al ul
    inputElm.value = ''; // despues de que ingrese el valor el campo queda basio 
})

inputElm.addEventListener("keyup", () => {
    if (event.code === 'Enter') {
        const valor = inputElm.value; //seleccionamos el valor que esta en el input
        const listaItemElm = document.createElement('li'); //se crea el elemento li que vamos a agregar
        listaItemElm.textContent = valor; //le vamos a agregar un contenido de texto 
        listaElm.appendChild(listaItemElm); // lo agrega al ul
        inputElm.value = ''; // despues de que ingrese el valor el campo queda basio 
    }
})