function filtrarNomes(lista, letra){
    return lista.filter(nome => nome.startsWith(letra));
}
console.log(filtrarNomes(["Ana", "João", "Maria"], 'A'));