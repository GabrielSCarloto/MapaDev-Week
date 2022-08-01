const btnAvancar = document.getElementById('btn_avancar');
const btnVoltar = document.getElementById('btn_voltar');
const cards = document.querySelectorAll('.cartao');
let cardAtual = 0;

function esconderCardSelecionado() {
    const cardSelecionado = document.querySelector('.selecionado');
    cardSelecionado.classList.remove('selecionado');
}

function mostrarCard(indiceCard) {
    cards[indiceCard].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function() {
    if(cardAtual === cards.length - 1) return;

    esconderCardSelecionado();

    cardAtual++;
    mostrarCard(cardAtual);
});

btnVoltar.addEventListener('click', function() {
    if(cardAtual === 0) return;

    esconderCardSelecionado();

    cardAtual--;
    mostrarCard(cardAtual);
});