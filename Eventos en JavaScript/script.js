const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultString = document.querySelector("#resultString");
const pResultSumaMath = document.querySelector("#resultSumaMath");

function btnOnclick(){ //funcion que se ejecuta cuando le damos click al boton.
    const sumaString = input1.value + input2.value; //Los input guarda todo lo que escriban los usarios en String, por lo tanto esta linea de codigo concatena los dos input 
    const sumaOperación = Number(input1.value) + Number(input2.value); //Number ==> convierte los string a numeros de esta forma podemos realizar operaciones matemáticas. 
    pResultString.innerText = "Resultado con concatenación: " + sumaString;
    pResultSumaMath.innerText = "Resultado con Operación Matemática:" + sumaOperación; 
}
