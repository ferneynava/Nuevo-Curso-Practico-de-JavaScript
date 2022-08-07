//console.log("Hello, world");

const h1 = document.querySelector("h1"); // Acceder al elemento por medio de la etiqueta "a".
const p = document.querySelector("p"); // Acceder al elemento por medio de la etiqueta "p".
const parrafito = document.querySelector(".parrafito"); // Acceder al elemento por medio de la clase .parrafito
const pid = document.querySelector("#pid"); //Acceder al elemento por medio del id 
const input = document.querySelector("input"); // Acceder al elemento por medio de la etiqueta "input".
const parrafo = document.querySelectorAll("p"); // Accede a todas las etiquetas que tengan "p" 
const id = document.getElementById("pid"); // Accede al elemto por medio del identificador 
const clas = document.getElementsByClassName("card"); //Accede al elemento por medio de la clase

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Ferney Nava <br> Educador </br>"; // La propiedad innerHTML permite modificar el HTML(codigo) que este dentro de nuestra etiqueta seleccionada. Permite insertar html. 
h1.innerText = "Ferney Nava <br> Educador </br>"; // La propiedad innerText permite modificar el HTML añadiendo solo TEXTO que este dentro de nuestra etiqueta seleccionada.
console.log(h1.getAttribute("class"));     //La propiedad getAttribute nos ayuda a leer algunos de los atributos que tenga nuestro elemento, en este caso el elemento es h1. 
h1.setAttribute("class", "rojo");                  // La propiedad serAttribute nos ayuda a modicar/establecer los atributos que tenga nuestro elemento, en este caso el elemento es h1.  El atributo class     
                                                    // modifica si valor por rojo. 