var normal = document.getElementById('normal')
var dificil = document.getElementById('dificil')
var chuckNorris = document.getElementById('chuckNorris')
var iniciarJogo = document.getElementById('iniciarJogo')
function selecionaNivel(nivel) {
    normal.style.border = '0px solid black'
    dificil.style.border = '0px solid black'
    chuckNorris.style.border = '0px solid black'
    if (nivel === 'normal') {
        console.log('nivel normal')
        normal.style.border = '5px solid black'
        iniciarJogo.href = 'normal.html'
    } else if (nivel === 'dificil') {
        console.log('nivel dificil')
        dificil.style.border = '5px solid black'
        iniciarJogo.href = 'dificil.html'
    } else if (nivel === 'chuckNorris') {
        console.log('nivel chuckNorris')
        chuckNorris.style.border = '5px solid black'
        iniciarJogo.href = 'chuckNorris.html'
    }
}
