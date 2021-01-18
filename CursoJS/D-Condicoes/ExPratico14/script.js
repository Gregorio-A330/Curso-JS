function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'fotomanha.jpg'
        if (hora >= 0 && hora < 8) {
            document.body.style.background = '#515154'
        } else {
            document.body.style.background = '#e2cd9f'
        }
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}
