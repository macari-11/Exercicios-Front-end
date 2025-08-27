function decimoQuarto(list){

    return new Set(list).length != list.length
};

console.log(decimoQuarto([1,2,3,4,4]));