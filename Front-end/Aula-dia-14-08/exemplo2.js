function filtrarNumeros(lista, valor){
    return lista.filter(numero => numero < valor);
}
console.log(filtrarNumeros([10,20,30,40,50,60,70,80,90], 50));

