function decimo(list,valor){
    return list.filter((elementList)=> elementList == valor).length
};

console.log(decimo([1,2,3,4,1,1], 1));