let prato = null;
let bebidaEscolhida = null;
let sobremesaEscolhida = null;

function removerBorda(classeItem, nomeExibicao){
    const selecionado = document.querySelector(".comida .borda");
    if (selecionado !== null){
        selecionado.classList.remove("borda");
    }
    const botao = document.querySelector("."+classeItem);
    botao.classList.add("borda");
    prato = nomeExibicao;
    /*if (nomeExibicao !== null){
        document.getElementById("check").style.display = "block";
    }else{
        document.getElementById("check").style.display = "none";
    }
    
    document.getElementsByTagName("ion-icon").style.display = "block"; */
}
function removerBorda2(classeItem, nomeExibicao){
    const selecionado = document.querySelector(".bebida .borda");
    if (selecionado !== null){
        selecionado.classList.remove("borda");
    }
    const botao = document.querySelector("."+classeItem);
    botao.classList.add("borda");
    bebidaEscolhida = nomeExibicao;
}
function removerBorda3(classeItem, nomeExibicao){
    const selecionado = document.querySelector(".sobremesa .borda");
    if (selecionado !== null){
        selecionado.classList.remove("borda");
    }
    const botao = document.querySelector("."+classeItem);
    botao.classList.add("borda");
    sobremesaEscolhida = nomeExibicao;
}


