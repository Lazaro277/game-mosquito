var mosca = document.getElementById('imagemMosca');
var container = document.getElementById('jogo');

function gerarPosicaoAleatoria() {
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
}

var coracao1 = document.getElementById('coracao1')
var coracao2 = document.getElementById('coracao2')
var coracao3 = document.getElementById('coracao3')
var pontos = 3
var contPontos = function contarPontos() {
    gerarPosicaoAleatoria();
    pontos--;
    console.log('perdeu ponto');
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
setInterval(contPontos, 1000);
function pontuacao() {
    pontos++;
    console.log('ganhou ponto')
}
var contagem = 30;
setInterval(function contagemRegressiva() {
    contagem--
    document.getElementById('contagemRegressiva').innerHTML = contagem
    if (contagem === 0) {
        window.location.href = 'vitoria.html'
    }
}, 1000)

