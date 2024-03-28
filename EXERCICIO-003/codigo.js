// 3. Crie uma função chamada squareNumber que recebe um número como argumento e retorna o quadrado desse número.

var num = parseInt(prompt("Digite um numero e vamos descobrir o quadrado dele"))

function squareNumber (num){
    
    return Math.pow(num, 2)
}

alert (squareNumber(num))