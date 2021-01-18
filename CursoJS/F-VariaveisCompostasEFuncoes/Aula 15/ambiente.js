// Testando arrays

let num = [5, 8, 2, 9, 3, , 10]

console.log(`nosso vetor é o ${num}`)
num[2] = "aaaa"
console.log(` ${num}`)
console.log(num)
num.push(7) // acrescenta valor no final do array
console.log(num)
console.log(num.length) //num.length ele informa o tamanho do array
num.sort()              //reposiciona o array internamente...
console.log(num)
/*
for (let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/
//For IN -> feito pra vetores e objetos
for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
console.log(num.indexOf(3))
//num.indexOf() retorna o index em relação ao que for inserido no parametro, no caso um valor que está na posição [1]
// testando uma validação para ver se encontra o valor 4 dentro do array pré definido
let pos = num.indexOf(i)
if (pos == -1) {
    console.log("O valor não foi encontrado!")
} else {
    console.log(`O valor está na posição ${pos}`)
}
