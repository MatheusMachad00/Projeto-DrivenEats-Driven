let prato = null;
let bebidaEscolhida = null;
let sobremesaEscolhida = null;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let total = (precoPrato + precoBebida + precoSobremesa);

function FecharPedido() {
    const botao1 = document.querySelector('.pedidoFinalizado');
    if (botao1 !== null) {
        if (prato !== 0 && bebidaEscolhida !== 0 && sobremesaEscolhida !== 0) {
            const botao = document.querySelector('.pedidoFinalizado');
            botao.classList.toggle('pedidoFinalizado');
            botao.innerHTML = 'Fechar pedido';
        }
    }
}
function removerBorda(classeItem, nomeExibicao, precoItem) {
    const selecionado = document.querySelector(".comida .borda");
    if (selecionado !== null) {
        selecionado.classList.remove("borda");
    }
    const botao = document.querySelector("." + classeItem);
    botao.classList.add("borda");
    prato = nomeExibicao;
    precoPrato = precoItem;

}
function removerBorda2(classeItem, nomeExibicao, precoItem2) {
    precoItem = precoBebida;
    const selecionado = document.querySelector(".bebida .borda");
    if (selecionado !== null) {
        selecionado.classList.remove("borda");
    }
    const botao = document.querySelector("." + classeItem);
    botao.classList.add("borda");
    bebidaEscolhida = nomeExibicao;
    precoBebida = precoItem2;
}
function removerBorda3(classeItem, nomeExibicao, precoItem3) {
    precoItem = precoSobremesa;
    const selecionado = document.querySelector(".sobremesa .borda");
    if (selecionado !== null) {
        selecionado.classList.remove("borda");
    }
    const botao = document.querySelector("." + classeItem);
    botao.classList.add("borda");
    sobremesaEscolhida = nomeExibicao;
    precoSobremesa = precoItem3;
    FecharPedido();
    // total = precoPrato + precoBebida + precoSobremesa;
}



function finalizarPedido() {
    FecharPedido();
    let mensagem = null;
    mensagem = 'Olá, gostaria de fazer o pedido:\n- Prato: ' + prato + '\n- Bebida: ' + bebidaEscolhida + '\n- Sobremesa: '+ sobremesaEscolhida + '\nTotal: R$ ' + total;
    window.open(`https://wa.me/9999999999999?text=${encodeURIComponent(mensagem)}`)
}

