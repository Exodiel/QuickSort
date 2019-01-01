let arreglo = [31, 41, 59, 26, 53, 58, 97, 93, 23, 84, 40];
console.log(arreglo);
const swap = (arr, izq, der) => {
    //Intercambia el valor de la posición izq con el valor de la posición der
    arr = arreglo;
    let temp = arr[izq];
    arr[izq] = arr[der];
    arr[der] = temp; 
};

const quickSort = (arr, izq, der) => {
    if(izq < der) {
        arr = arreglo;
        let lim = der,
            ori = izq;

        let pivot = arr[der];
        der--;

        while (izq <= der) {
            // Buscar del lado izquierdo un número mayor que el pivot
            while (izq < arr.length &&  arr[izq] < pivot) {
                izq++;
            }
            //Buscar del lado derecho un número menor que el pivot
            while (der >= 0 &&  arr[der] > pivot) {
                der--;
            }

            if (izq <= der) {
                //Intercambiar ambos encontrados
                swap(arr, izq, der);

                //aumentar el valor de izq
                izq++;
                //aumentar el valor de der
                der--;
            }
        }
        // Termina separación de elementos  izq | der
        swap(arr, izq, lim);
        quickSort(arr, ori, der);
        quickSort(arr, izq, lim);
    }

};

quickSort(arreglo, 0, arreglo.length-1);
console.log(arreglo);