let prato = null;
let bebidaEscolhida = null;
let sobremesaEscolhida = null;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let total = 0;

function FecharPedido() {
    const botao1 = document.querySelector('.pedidoFinalizado');
    if (botao1 !== null) {
        if (prato !== null && bebidaEscolhida !== null && sobremesaEscolhida !== null) {
            const botao = document.querySelector('.pedidoFinalizado');
            botao.classList.toggle('pedidoFinalizado');
            botao.innerHTML = 'Fechar pedido';
        }
    }
}
/*function removerCheck(){
    const icone = document.querySelector(".box_check .check");
    if (icone !== null){
        icone.classList.remove("check");
    } else {
        icone.classList.add("check");
    }

} */

function removerBorda(classeItem, nomeExibicao, precoItem) {
    const selecionado = document.querySelector(".comida .borda");
    if (selecionado !== null) {
        selecionado.classList.remove("borda");
    }
    const botao = document.querySelector("." + classeItem);
    botao.classList.add("borda");
    prato = nomeExibicao;
    precoPrato = precoItem;
    FecharPedido();
    //removerCheck()
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
    FecharPedido();
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
}
function finalizarPedido() {
    if (prato !== null && bebidaEscolhida !== null && sobremesaEscolhida !== null) {
        FecharPedido();
        total = (precoPrato + precoBebida + precoSobremesa);
        let mensagem = null;
        mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato} \n- Bebida: ${bebidaEscolhida} \n- Sobremesa: ${sobremesaEscolhida} \nTotal: R$ ${total.toFixed(2)}`;
        window.open(`https://wa.me/9999999999999?text=${encodeURIComponent(mensagem)}`)
    } else {
        return;
    }
}