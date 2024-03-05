
function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data =new Date()
    var hora = data.getHours()
    //hora=9
    msg.innerHTML = `Agora são ${hora} horas.`
    img.style.borderRadius = "200px"  // deixar a figura redonda
 
    if (hora >=0 && hora < 12) {
        // BOM DIA
    
        img.src = "fotomanhã.png"
        document.body.style.background ='#e2cd9f'   // alterar cor fundo
        msg.innerHTML +=` Bom dia.`
    } else if (hora >=12 && hora < 18) {
        // boa tarde
       
        img.src = "fototarde.png"
        document.body.style.background ='#b9846f'   // alterar cor fundo
        msg.innerHTML +=` Boa tarde.`

    } else {
        // boa noite
        img.scr="fotonoite.png"
        document.body.style.background = "#515154"  // alterar cor do fundo
        msg.innerHTML+=` Boa noite.`
    }
 }
