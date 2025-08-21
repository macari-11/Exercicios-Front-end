// function falarRusso(){
//     console.log("Priviat")
// }

// function falarDescolado(){
//     console.log("Salve mano?")
// }



// function cumprimentar (falarFn){
//     console.log("Opa Bão")
//     falarFn()
// }

// cumprimentar(falarRusso);
// cumprimentar(falarDescolado);

// cumprimentar(()=>{
//     console.log("Macari")
// });

async function buscarDados(){
const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
     method: "GET" });
const data = await response.json();
return data

}

async function exibirDados(){
    await buscarDados()
    console.log("BUscou dados")
}

exibirDados(); 

