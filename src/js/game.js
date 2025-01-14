let time = localStorage.getItem('gameTime')
let vidas = 3
let statusKill = false
var tamanhoMaxPagina = window.innerHeight - 40
var larguraMaxPagina = window.innerWidth - 40

criaMosquito()

setInterval(mudaTempo, 1000)

function mudaTempo(){
    if(vidas <= 0){
        window.location.href = 'gameover.html'
    }

    if(time <= 0){
        window.location.href = 'vitoria.html'
    }

    criaMosquito()

    if (statusKill == false){
        vidas--;
        mudaVidas()
    }

    document.getElementById('tempo').innerText = `Tempo Restante : ${time}`
    statusKill = false
    time--;
}

function criaMosquito(){

    mosca = document.getElementById('mosca')
    mosca.style.display = 'inline'
    mosca.style.width = `${Math.floor(Math.random() * (30) + 50)}px` 
    let posicaoX = `${Math.floor(Math.random() * larguraMaxPagina - 90)}px` 
    let posicaoY = `${Math.floor(Math.random() * tamanhoMaxPagina - 90)}px` 
    posicaoX = posicaoX < 0? 0 : posicaoX
    posicaoY = posicaoY < 0? 0 : posicaoY
    mosca.style.left = posicaoX
    mosca.style.top = posicaoY
   
}

function mudaVidas(){
    switch (vidas) {
        case 2:
            div = document.getElementById('vidas')
            div.innerHTML = `<img src="../assets/coracao_cheio.png" alt=""><img src="../assets/coracao_cheio.png" alt=""><img src="../assets/coracao_vazio.png" alt=""><h3 id="tempo">Tempo Restante : ...</h3>`
            break;
        
        case 1:
            div = document.getElementById('vidas')
            div.innerHTML = `<img src="../assets/coracao_cheio.png" alt=""><img src="../assets/coracao_vazio.png" alt=""><img src="../assets/coracao_vazio.png" alt=""><h3 id="tempo">Tempo Restante : ...</h3>`
            break;
        
        case 0:
            div = document.getElementById('vidas')
            div.innerHTML = `<img src="../assets/coracao_vazio.png" alt=""><img src="../assets/coracao_vazio.png" alt=""><img src="../assets/coracao_vazio.png" alt=""><h3 id="tempo">Tempo Restante : ...</h3>`
            break;
    
        default:
            break;
    }
}

function matouMosca(){
    statusKill = true
    document.getElementById('mosca').style.display = 'none'
}

function ajustaTamanhoJogo(){
    tamanhoMaxPagina = window.innerHeight - 40
    larguraMaxPagina = window.innerWidth - 40
}

