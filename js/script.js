
const normal = document.getElementById('normal')
const dificil = document.getElementById('dificil')
const chuckNorris = document.getElementById('chuckNorris')
const mosca = document.getElementById('imagemMosca');
const container = document.getElementById('jogo');
const coracao1 = document.getElementById('coracao1')
const coracao2 = document.getElementById('coracao2')
const coracao3 = document.getElementById('coracao3')

let cliqueAnterior = 'naoSelecionado';
let vidas = 3
let contagem;
let tempoMosca;
let min;
let max;
let nivel;
let nivelSalvo;
let intervaloMosca;
let intervaloContagem;


let contPontos = function contarPontos() {
    gerarPosicaoAleatoria();
    vidas--;

    // Remove coração a cada ponto perdido
    if (vidas === 2) {
        coracao1.src = 'img/coracao_vazio.png'
    } else if (vidas === 1) {
        coracao1.src = 'img/coracao_vazio.png'
        coracao2.src = 'img/coracao_vazio.png'
    } else if (vidas === 0) {
        coracao1.src = 'img/coracao_vazio.png'
        coracao2.src = 'img/coracao_vazio.png'
        coracao3.src = 'img/coracao_vazio.png'
    } else if (vidas === -1) {
        clearInterval(intervaloMosca)
        clearInterval(intervaloContagem)
        window.location.href = "game_over.html"
    }
}

window.onload = function () {
    nivelSalvo = localStorage.getItem('nivel');
}

function gerarPosicaoAleatoria() {
    document.getElementById('cliqueMosca').className = 'd-block'

    // Cria tamanhos aleatórios para o mosquito
    const randomPx = Math.random() * (max - min) + min;
    mosca.style.width = `${randomPx}px`;

    // Obtém as dimensões atuais do contêiner
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Obtém as dimensões atuais da imagem
    const imagemWidth = mosca.offsetWidth;
    const imagemHeight = mosca.offsetHeight;

    // Calcula a posição máxima que a imagem pode ter para não sair do contêiner
    // Subtraímos a largura/altura da imagem para que ela fique totalmente visível
    const maxX = containerWidth - imagemWidth;
    const maxY = containerHeight - imagemHeight;

    // Garante que o maxX e maxY não sejam negativos (caso a imagem seja maior que o container)
    const randomX = Math.max(0, Math.floor(Math.random() * maxX));
    const randomY = Math.max(0, Math.floor(Math.random() * maxY));

    // Aplica as novas posições à imagem
    mosca.style.left = `${randomX}px`;
    mosca.style.top = `${randomY}px`;

    // Faz com que a imagem aparece de lados aleatórios
    var lado = Math.floor(Math.random() * 2);
    switch (lado) {
        case 0:
            mosca.className = 'ladoA'
            break
        case 1:
            mosca.className = 'ladoB'
            break
    }

}

function pontuacao() {
    vidas++;
    document.getElementById('cliqueMosca').className = 'd-none'
}

function jogar() {
    nivel = window.location.search
    nivel = nivel.replace('?', '')
    localStorage.setItem('nivel', nivel);

    if (nivel === 'normal') {
        document.title = 'Normal'
        contagem = 20
        tempoMosca = 1500
        min = 50
        max = 90
    } else if (nivel === 'dificil') {
        document.title = 'Difícil'
        contagem = 15
        tempoMosca = 1000
        min = 40
        max = 80
    } else if (nivel == 'chuckNorris') {
        document.title = 'Chuck Norris'
        contagem = 10
        tempoMosca = 750
        min = 30
        max = 70
    } else {
        window.location.href = 'index.html'
        return
    }

    document.getElementById('contagemRegressiva').innerHTML = contagem

    gerarPosicaoAleatoria();

    intervaloMosca = setInterval(contPontos, tempoMosca);

    intervaloContagem = setInterval(function contagemRegressiva() {
        contagem--
        document.getElementById('contagemRegressiva').innerHTML = contagem
        if (contagem === 0) {
            clearInterval(intervaloMosca)
            clearInterval(intervaloContagem)
            window.location.href = 'vitoria.html'
        }
    }, 1000)

}

function reiniciarJogo() {
    if (nivelSalvo) {
        window.location.href = 'jogo.html?' + nivelSalvo
    } else {
        window.location.href = 'index.html'
    }
}

function selecionaNivel(nivel) {
    normal.style.border = '0px solid black'
    dificil.style.border = '0px solid black'
    chuckNorris.style.border = '0px solid black'
    document.querySelector('.nivelNaoSelecionado').classList.add('d-none')
    if (nivel === 'normal') {
        normal.style.border = '5px solid black'
    } else if (nivel === 'dificil') {
        dificil.style.border = '5px solid black'
    } else if (nivel === 'chuckNorris') {
        chuckNorris.style.border = '5px solid black'
    } else {
        if (cliqueAnterior === 'naoSelecionado') {
            document.querySelector('.nivelNaoSelecionado').classList.remove('d-none')
            document.querySelector('.nivelNaoSelecionado').style.marginBottom = '-10px'
        } else {
            window.location.href = 'jogo.html?' + cliqueAnterior;

        }
    }
    cliqueAnterior = nivel;
}
