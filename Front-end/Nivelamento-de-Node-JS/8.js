function oitavo(list){
    return list.reduce((valor, elementoLista)=>{
        return valor<elementoLista ? valor : elementoLista},list[0])
};

console.log(oitavo([1,2,3,4,5,6,7]))