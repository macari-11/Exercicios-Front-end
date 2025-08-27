function setimo(list){
    return list.reduce((valor,elementoList)=>{return elementoList > valor ? elementoList : valor},list[0])
}

console.log(setimo([1,2,3,4,5,6,7]))