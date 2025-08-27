function decimoPrimeiro(list){
    return list.filter((listElement)=> listElement%2==0)
};

console.log(decimoPrimeiro([1,2,3,4,5,6,7]));