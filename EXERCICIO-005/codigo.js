//5. Crie uma função chamada filterEvenNumbers que recebe um array de números e retorna um novo array contendo apenas os números pares do array original.

var array = [3, 5, 6, 2, 4, 99, 554, 22, 4 ] 

var array_par = []

function filterEvenNumber(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            array_par.push(array[i])
        }
    }
    return array_par
}

console.log(filterEvenNumber(array))



