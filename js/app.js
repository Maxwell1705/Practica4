// Arreglos
let numerosMostrar = [1, 23, 45, 2, 6, 9, 4, 15, 36, 43, 14, 19, 29, 71, 24, 12, 13, 18, 20, 10];

let numeros = [1, 23, 45, 2, 6, 9, 4, 15, 36, 43, 14, 19, 29, 71, 24, 12, 13, 18, 20, 10];

function promedio(numeros) {
    prom = document.getElementById('promedio');
    let suma = 0;
    let numerosL = numeros.length;
    for (let i = 0; i < numerosL; i++) {
        suma += numeros[i];
    } 
    return suma / numerosL;
    
}



console.log(promedio(numeros));

function valorPares(numeros){
    let contador = 0; 
    let numerosL = numeros.length;
    for(let i=0; i<numerosL; i++){
        if(numeros[i]%2 == 0){ 

            contador++;
        }
    }
    return contador;
}

console.log(valorPares(numeros));

// Función para ordenar los valores del arreglo de mayor a menor
function ordenados(numeros){
    let aux; 
    let numerosL = numeros.length;
    let band = false;
    while(!band){
        band = true;
        for(let i=0; i<numerosL; i++){
                    
            if(numeros[i+1] > numeros[i]){
                aux = numeros[i];
                numeros [i] = numeros [i+1];
                numeros[i+1] = aux;
                band = false;
            }
        }
    }    
    return numeros;
}


console.log(ordenados(numeros));


function mostrar(){
        array = document.getElementById('arreglo');
        prom = document.getElementById('promedio');
        par = document.getElementById('pares');
        ordenado = document.getElementById('orden');
    
        array.innerHTML = numerosMostrar;
        prom.innerHTML = "Promedio: " + promedio(numeros);
        par.innerHTML = "Cantidad de números pares: " + valorPares(numeros);
        ordenado.innerHTML = "Ordenados de mayor a menor son: " + ordenados(numeros);
}

