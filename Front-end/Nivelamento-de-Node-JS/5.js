function quinto(list){
    return list.filter((numero)=>numero<0).length
};

console.log(quinto([-1,2,3,4,-5]))