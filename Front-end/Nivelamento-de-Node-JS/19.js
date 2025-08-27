function decimoNono(list1,list2){
    if(list1.length != list2.length){
        return "Vetores de tamanhos diferentes";
    }

    return list1.map((elementList1, index)=> elementList1 + list2[index])
};

console.log(decimoNono([1,2,3,4,5], [1,2,3,4,5,6]));
console.log(decimoNono([1,2,3,4,5], [1,2,3,4,5]));