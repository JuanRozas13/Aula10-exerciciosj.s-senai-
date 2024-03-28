//Crie uma função chamada squares que recebe um array de números e retorna um novo array onde cada elemento é o quadrado do elemento correspondente do array original.



let array = [2, 4, 5, 7]
let array_qdd = []

function squares (array){
    for (let i = 0; i < array.length; i++) {
    let quadrado = Math.pow(array[i], 2)
    array_qdd.push(quadrado)
    }
    return array_qdd
}



alert(squares(array));