# 🦟 Mata Mosquito

Jogo desenvolvido com **HTML, CSS e JavaScript** em que o objetivo é eliminar os mosquitos antes que o tempo acabe, evitando perder todas as vidas.

O jogo possui três níveis de dificuldade, que alteram o tempo da partida, a velocidade de aparição e o tamanho dos mosquitos.

## 🎮 Jogar

Você pode jogar diretamente pelo navegador através do GitHub Pages:

**[▶️ Jogar Mata Mosquito](http://portfoliolazaro.me/game-mosquito/)**

## 📸 Demonstração

<!-- Adicione aqui uma imagem ou GIF da tela inicial -->

![Tela inicial do Mata Mosquito](https://github.com/Lazaro277/game-mosquito/blob/main/img/Captura%20de%20tela%201.png?raw=true)

<!-- Adicione aqui uma imagem ou GIF da partida -->

![Partida do Mata Mosquito](https://github.com/Lazaro277/game-mosquito/blob/main/img/Captura%20de%20tela%202.png?raw=true)

## 🕹️ Como funciona

Antes de iniciar a partida, o jogador pode escolher entre três níveis:

- **Normal** — 20 segundos de partida e mosquitos maiores.
- **Difícil** — 15 segundos de partida, com aparições mais rápidas.
- **Chuck Norris** — 10 segundos de partida, com mosquitos menores e ainda mais rápidos.

Durante a partida, os mosquitos aparecem em posições, tamanhos e orientações aleatórias na tela.

O jogador possui três vidas. Quando um mosquito não é eliminado a tempo, uma vida é perdida. Depois de utilizar todas as chances, o próximo mosquito perdido resulta em **Game Over**.

Para vencer, é necessário permanecer no jogo até o fim da contagem regressiva.

## ✨ Funcionalidades

- Seleção entre três níveis de dificuldade
- Contagem regressiva
- Sistema de vidas
- Posições aleatórias dos mosquitos
- Tamanhos aleatórios dos mosquitos
- Velocidade de aparição de acordo com a dificuldade
- Orientação aleatória dos mosquitos
- Tela de vitória e Game Over
- Reinício da partida mantendo o último nível selecionado
- Interface adaptada para diferentes tamanhos de tela

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap**

## 📂 Estrutura do projeto

```text
game-mosquito/
├── css/
├── img/
├── js/
├── game_over.html
├── index.html
├── jogo.html
├── vitoria.html
└── README.md
```

## 💻 Executar localmente

Caso prefira executar o projeto localmente, clone o repositório:

```bash
git clone https://github.com/Lazaro277/game-mosquito.git
```

Acesse a pasta:

```bash
cd game-mosquito
```

Depois, abra o arquivo `index.html` no navegador.

Como o projeto utiliza apenas tecnologias front-end, não é necessário instalar dependências.

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

- Manipulação do DOM
- Eventos de clique
- Manipulação de classes e estilos
- `setInterval()` e `clearInterval()`
- `localStorage`
- Geração de valores aleatórios com `Math.random()`
- Manipulação da URL
- Controle do estado do jogo
- Responsividade com CSS
- Integração entre HTML, CSS e JavaScript

## 👨‍💻 Autor

Desenvolvido por **Lázaro Messias** como projeto de estudo e prática de desenvolvimento web.
