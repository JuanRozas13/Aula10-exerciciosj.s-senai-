//2. Crie uma função chamada maxNumber que recebe dois números como argumentos e retorna o maior deles.
 
var num_0 = parseInt(prompt("digite um numero"))
var num_1 = parseInt(prompt("digite mais um numero"))

function Maxnumber (num_0,num_1){
    if(num_0 > num_1){
        alert (num_0 + " maior")
    }
    else{
        alert (num_1 + " maior")
    }
}



Maxnumber(num_0, num_1)