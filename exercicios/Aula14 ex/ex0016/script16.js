function contar() {
  
    let inicio = document.getElementById("txtInicio")
    let fim = document.getElementById("txtFim")
    let passo = document.getElementById("txtPasso")
    let res = document.getElementById('res')

    
    var vrinicio = Number(inicio.value)
    var vrfim = Number(fim.value)
    var vrpasso = Number(passo.value)
     
 
    if (vrpasso <= 0) {
      vrpasso = 1
    }

    if (inicio.value.length ==0 || fim.value.length==0 || passo.value.length==0) { 
      res.innerHTML = 'Impossivel contar'    
      //window.alert('[ERRO] Faltam dados')
    } else {
         res.innerHTML = 'Contando: <br>'

         if (vrinicio < vrfim) {
             // contagem crescente
           for (let c=vrinicio; c <= vrfim; c += vrpasso) {
              res.innerHTML += ` ${c} \u{1F449}`
         } 
        }else {
             // contagem regressiva
             for(let c= vrinicio; c >= vrfim; c -= vrpasso) {
                res.innerHTML += ` ${c} \u{1F449}`
             }
         }
         res.innerHTML += `\u{1F3C1}`
        }    
                
    }
