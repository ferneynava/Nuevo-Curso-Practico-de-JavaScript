const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultString = document.querySelector("#resultString");
const pResultSumaMath = document.querySelector("#resultSumaMath");


// btn.addEventListener("click", btnOnclick)    //addEventListener(Agrega un escuchador de eventos) escucha cada vez que suceda cierto evento cada vez que pase ejecuta el codigo JS
//                              //addEventListener("Nombre del evento", codigo de js que querramos llamar cuento suceda el evento)
//                              //btnOnclick funcion que debe mandar a llamar cuando sea que tengamos el evento de click

// function btnOnclick(){ //funcion que se ejecuta cuando le damos click al boton.
//     const sumaString = input1.value + input2.value; //Los input guarda todo lo que escriban los usarios en String, por lo tanto esta linea de codigo concatena los dos input 
//     const sumaOperación = Number(input1.value) + Number(input2.value); //Number ==> convierte los string a numeros de esta forma podemos realizar operaciones matemáticas. 
//     pResultString.innerText = "Resultado con concatenación: " + sumaString;
//     pResultSumaMath.innerText = "Resultado con Operación Matemática:" + sumaOperación; 
// }

//// Forma 1 formulario submit 

// form.addEventListener("submit", sumarInputValues); // submit se activa cuando el formulario es enviado, normalmente se utiliza para validar el formulario antes de ser enviado
//                                                     //al servidor. 

// function sumarInputValues(event){ //funcion que se ejecuta cuando le damos click al boton.
//     //console.log({event});  
//     event.preventDefault();
//     const sumaString = input1.value + input2.value; //Los input guarda todo lo que escriban los usarios en String, por lo tanto esta linea de codigo concatena los dos input 
//     const sumaOperación = Number(input1.value) + Number(input2.value); //Number ==> convierte los string a numeros de esta forma podemos realizar operaciones matemáticas. 
//     pResultString.innerText = "Resultado con concatenación: " + sumaString;
//     pResultSumaMath.innerText = "Resultado con Operación Matemática:" + sumaOperación; 
// }

//// Forma 2 button 

//btn.addEventListener("click", sumarInputValues); // submit se activa cuando el formulario es enviado, normalmente se utiliza para validar el formulario antes de ser enviado
                                                     //al servidor. 

//function sumarInputValues(event){ //funcion que se ejecuta cuando le damos click al boton.
    //console.log({event});  
    //event.preventDefault();
  //  const sumaString = input1.value + input2.value; //Los input guarda todo lo que escriban los usarios en String, por lo tanto esta linea de codigo concatena los dos input 
   // const sumaOperación = Number(input1.value) + Number(input2.value); //Number ==> convierte los string a numeros de esta forma podemos realizar operaciones matemáticas. 
    //pResultString.innerText = "Resultado con concatenación: " + sumaString;
    //pResultSumaMath.innerText = "Resultado con Operación Matemática:" + sumaOperación; 
//}

/// evento keydown ==> evento se dispara cuando se presiona una tecla

// addEventListener("keydown", sumarInputValues);

// function sumarInputValues(event){ //funcion que se ejecuta cuando le damos click al boton.
//     if(event.key == "Enter"){
//         const sumaString = input1.value + input2.value; //Los input guarda todo lo que escriban los usarios en String, por lo tanto esta linea de codigo concatena los dos input 
//         const sumaOperación = Number(input1.value) + Number(input2.value); //Number ==> convierte los string a numeros de esta forma podemos realizar operaciones matemáticas. 
//         pResultString.innerText = "Resultado con concatenación: " + sumaString;
//         pResultSumaMath.innerText = "Resultado con Operación Matemática:" + sumaOperación; 
//     }  
// }

/// evento mouseover ==> evento se activa cuando se usa un dispositivo señalador (como un mouse o un trackpad) para mover el cursor al elemento o uno de sus elementos secundarios. 

// addEventListener("mouseover", () => {
//     const sumaString = input1.value + input2.value; //Los input guarda todo lo que escriban los usarios en String, por lo tanto esta linea de codigo concatena los dos input 
//     const sumaOperación = Number(input1.value) + Number(input2.value); //Number ==> convierte los string a numeros de esta forma podemos realizar operaciones matemáticas. 
//     pResultString.innerText = "Resultado con concatenación: " + sumaString;
//     pResultSumaMath.innerText = "Resultado con Operación Matemática:" + sumaOperación; 
// })
