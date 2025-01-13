function iniciaJogo(){
    difficulty = document.getElementById('dificuldade').value
    console.log(difficulty)
    
    if (difficulty == ''){
        alert('Selecione uma dificuldade válida!')
        return
    }

    switch (difficulty) {
        case 'normal':
            redirect(20)
            break;
        case 'hard':
            redirect(40)
            break;
        case 'extreme':
            redirect(60)
            break;
    
        default:
            break;
    }

}

function redirect(tempo){
    localStorage.setItem('gameTime', tempo);
    window.location.href = 'game.html'
}

function mainPage(){
    window.location.href = 'home.html'
}

