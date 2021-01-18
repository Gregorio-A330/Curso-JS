function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[erro] Verifique os dados e tente novamente ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 15) {
                // criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                // criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        } else if (fsex[2].checked){
            genero = 'Alien'
            if (idade < 5){
                img.setAttribute('src', 'alien-bebe.jpg')
            } else {
                img.setAttribute('src', 'alien-adulto.jpg')
            }
        }   

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        //adicionando o estilo para a imagem pois não tenho PS para cortar redondo
        img.style.borderRadius = "50%"
        img.style.width = "100"
        img.style.height = "100"
    }

}
