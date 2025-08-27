function decimoOitavo(list){
    if(!list.every(el => typeof el === 'number')){
        return "Opção Invalida"
    }

    return list.every((el, i, arr) => i === 0 || arr[i - 1] <= el);
}

console.log(decimoOitavo([1,2,3,4,5,'macari']));
console.log(decimoOitavo([1,2,3,4,5,2]));
console.log(decimoOitavo([1,2,3,4,5]));