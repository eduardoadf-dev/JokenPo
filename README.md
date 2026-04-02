# ✊✋✌️ JokenPô

Jogo de **Pedra, Papel e Tesoura** contra a máquina, com placar em tempo real e interface responsiva.

---

## 📸 Demonstração

Link do projeto: https://eduardoadf-dev.github.io/JokenPo/

<img width="418" height="409" alt="JokenPo" src="https://github.com/user-attachments/assets/c51a3510-ae24-437b-aedd-407bb51d1aef" />

---

## 📋 Sobre o projeto

O **JokenPô** é um jogo clássico de Pedra, Papel e Tesoura onde o jogador disputa contra a máquina. A cada rodada o resultado é exibido na tela e o placar é atualizado automaticamente, podendo ser resetado a qualquer momento.

---

## ✨ Funcionalidades

- ✊ Escolha entre Pedra, Papel ou Tesoura clicando nos botões
- 🤖 A máquina realiza sua jogada de forma aleatória
- 🏆 Placar individual para o jogador e para a máquina
- 📢 Resultado de cada rodada exibido na tela (Vitória, Derrota ou Empate)
- 🔄 Botão de reset para zerar o placar e reiniciar o jogo
- 📱 Layout responsivo adaptado para dispositivos móveis

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| HTML5 | Estrutura da página |
| CSS3 | Estilização, animações e responsividade |
| JavaScript | Lógica do jogo e controle de placar |

---

## 📁 Estrutura do projeto

```
devclub-jokenpo/
├── index.html
├── styles.css
└── script.js
```

---

## 🎮 Como usar

| Botão | Ação |
|-------|------|
| ✊ Pedra | Joga Pedra contra a máquina |
| 🖐️ Papel | Joga Papel contra a máquina |
| ✌️ Tesoura | Joga Tesoura contra a máquina |
| Reset | Zera o placar e limpa o resultado |

> 💡 Passe o mouse sobre os botões para ver a animação de balanço antes de jogar!

---

## ⚙️ Detalhes técnicos

- A jogada da máquina é gerada com `Math.random()` sobre um array de opções, garantindo aleatoriedade real a cada rodada
- A lógica da rodada é centralizada na função `playRound()`, que compara as escolhas e atualiza o placar diretamente no DOM
- Os botões possuem animação CSS `shake` ao hover, com escala e sombra para feedback visual
- O background utiliza imagem aleatória via `picsum.photos`, tornando cada sessão visualmente única

---

## 📱 Responsividade

A aplicação é adaptada para telas menores que **480px**, com ajustes no tamanho dos botões, fontes e alinhamento do botão de reset para melhor experiência em dispositivos móveis.


