

function contar() {
    let inic = document.getElementById('txtInic')
    let fim = document.getElementById('txtFim')
    let passo = document.getElementById('txtPasso')
    let res = document.getElementById('res')

    if (inic.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}` // \u{código} formatação unicode para JS
            }
        } else {
            // contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1} `
    }
}
