let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) //joga o que for adicionado dentro do vetor
        let item = document.createElement('option') //cria um option do select
        item.text = `Valor ${num.value} adicionado` //adiciona um texto do elemento criado acima
        lista.appendChild(item) //a joga na tela
        res.innerHTML = ''// caso adicione algum outro valor após ja ter clicado em finalizar ele apaga o resultado
    } else {
        window.alert(`Valor inválido ou já encontrado na lista.`)
    }
    num.value = '' //aqui quando voce insere um numero ele "apaga o que está no input"
    num.focus() //para depois que clicar em adicionar ele setar o focus novamente no input
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valres antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor= valores[pos]   
            }    
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p> `
        res.innerHTML += `<p>A media dos valores digitados é ${media}.</p> `
    }

}
