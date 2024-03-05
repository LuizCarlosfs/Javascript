function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =document.querySelector('div#res')
    if (fano.value.length==0 || fano.value >ano) {
        window.alert('[ERRO] favor verificar o ano')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero =""
           
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        img.style.borderRadius ='200px'   // deixar foto redonda




        if (fsex[0].checked) {
            genero = "Homem"
            if (idade < 10){
                // criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade <50) {
                //adulto
   
            } else {
                // idoso
            }

        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade < 10){
                // criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade <21) {
                //jovem
            } else if (idade <50) {
                //adulto
            } else {
                // idoso
            }
        }
        res.style.textAlign = "center"    //centralizar
        res.innerHTML =`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
            
    }
}
