function decimoSegundo(list){
    return list.filter((elementList)=>elementList % 2 == 1);
};

console.log(decimoSegundo([1,2,3,4,5,6,7]));