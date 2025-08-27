function quarto (list){
    return list.filter((numero)=>numero%2==1).length
};

console.log(quarto([1,2,3,4,5,6,7,8]))