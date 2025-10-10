
var normal = document.getElementById('normal')
var dificil = document.getElementById('dificil')
var chuckNorris = document.getElementById('chuckNorris')
var iniciarJogo = document.getElementById('iniciarJogo')
var mosca = document.getElementById('imagemMosca');
var container = document.getElementById('jogo');
var coracao1 = document.getElementById('coracao1')
var coracao2 = document.getElementById('coracao2')
var coracao3 = document.getElementById('coracao3')
var cliqueAnterior = 'naoSelecionado';
var pontos = 3
var contagem;
var tempoMosca;
var min;
var max;
var nivel;
var nivelSalvo;
var contPontos = function contarPontos() {
    gerarPosicaoAleatoria();
    pontos--;
    console.log('perdeu ponto');

    // Remove coração a cada ponto perdido
    if (pontos === 2) {
        coracao1.src = 'img/coracao_vazio.png'
    } else if (pontos === 1) {
        coracao1.src = 'img/coracao_vazio.png'
        coracao2.src = 'img/coracao_vazio.png'
    } else if (pontos === 0) {
        coracao1.src = 'img/coracao_vazio.png'
        coracao2.src = 'img/coracao_vazio.png'
        coracao3.src = 'img/coracao_vazio.png'
    } else if (pontos === -1) {
        window.location.href = "game_over.html"
    }
}

window.onload = function () {
    nivelSalvo = localStorage.getItem('nivel');
}

function gerarPosicaoAleatoria() {
    document.getElementById('cliqueMosca').className = 'd-block'

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

    // Cria tamanhos aleatórios para o mosquito
    const randomPx = Math.random() * (max - min) + min;
    mosca.style.width = `${randomPx}px`;

    // Faz com que a imagem aparece de lados aleatórios
    var lado = Math.floor(Math.random() * 2);
    console.log(lado)
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
    pontos++;
    document.getElementById('cliqueMosca').className = 'd-none'
    console.log('ganhou ponto')
}

function jogar() {
    nivel = window.location.search
    nivel = nivel.replace('?', '')
    localStorage.setItem('nivel', nivel);

    if (nivel === 'normal') {
        contagem = 20
        tempoMosca = 1500
        min = 50
        max = 90
    } else if (nivel === 'dificil') {
        contagem = 15
        tempoMosca = 1000
        min = 40
        max = 80
    } else {
        contagem = 10
        tempoMosca = 750
        min = 30
        max = 70
    }

    document.getElementById('contagemRegressiva').innerHTML = contagem

    setInterval(contPontos, tempoMosca);

    setInterval(function contagemRegressiva() {
        contagem--
        document.getElementById('contagemRegressiva').innerHTML = contagem
        if (contagem === 0) {
            window.location.href = 'vitoria.html'
        }
    }, 1000)

}

function selecionaNivel(nivel) {
    normal.style.border = '0px solid black'
    dificil.style.border = '0px solid black'
    chuckNorris.style.border = '0px solid black'
    document.querySelector('.nivelNaoSelecionado').classList.add('d-none')
    if (nivel === 'normal') {
        console.log('nivel normal')
        normal.style.border = '5px solid black'
    } else if (nivel === 'dificil') {
        console.log('nivel dificil')
        dificil.style.border = '5px solid black'
    } else if (nivel === 'chuckNorris') {
        console.log('nivel chuckNorris')
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
