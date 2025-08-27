function decimoQuinto(list){
    return list.reduce((sum, elementList)=> sum+elementList,0) / list.length;
};

console.log(decimoQuinto([1,2,4,5,6]))