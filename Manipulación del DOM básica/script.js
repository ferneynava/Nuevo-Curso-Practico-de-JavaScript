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
                                                    // modifica su valor por rojo. 
h1.classList.add("rojo"); //La propiedad classList funciona directamente con las class(clases), podemos add (añadir) una nueva clase 
h1.classList.remove("verde"); //La propiedad classList funciona directamente con las class(clases), podemos remove (eliminar) una clase especificada. 
h1.classList.toggle("verde"); //La propiedad classList funciona directamente con las class(clases), podemos aplicar el metodo toggle que permite alternar entre agregar y eliminar un nombre de clase
                                //de un elemento.  
h1.classList.contains("verde"); //La propiedad classList funciona directamente con las class(clases), podemos aplicar el metodo contains que devuelve true o false dependiendo si el elemento tiene la clase
                                //verde
input.value = "456";


pid.innerText = ""; // Eliminando el texto que se encuentra en el parrafo con ""
const img = document.createElement("img");                         //Crea un elemento html desde cero con el metodo createElement, crea el elemento html especificado (img) 
img.setAttribute("src", "https://images.pexels.com/photos/12297336/pexels-photo-12297336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"); // A esa imagen se le colocaron los atributos src con su direccion
pid.appendChild(img); // appendChild(inserta un hijo a un contenedor), insertar la imagen (img) dentro del contenedor/elemento 