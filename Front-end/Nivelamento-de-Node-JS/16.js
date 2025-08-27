function decimoSexto(list, number){
    return list.filter((elementList)=> elementList > number);
}

console.log(decimoSexto([1,2,3,4,5],3));