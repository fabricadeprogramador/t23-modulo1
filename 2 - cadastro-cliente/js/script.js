function abrirMenu(){

    document.getElementById("menu").classList.remove("menu-fechado");
    document.getElementById("menu").classList.add("menu-aberto");

    document.getElementById("main").classList.remove("main-menu-fechado");
    document.getElementById("main").classList.add("main-menu-aberto");


    document.querySelector(".btn-menu-abrir").classList.remove("exibir-botao");
    document.querySelector(".btn-menu-abrir").classList.add("remover-botao");
}

function fecharMenu(){

    document.getElementById("menu").classList.remove("menu-aberto");
    document.getElementById("menu").classList.add("menu-fechado");

    document.getElementById("main").classList.remove("main-menu-aberto");
    document.getElementById("main").classList.add("main-menu-fechado");
    
    document.querySelector(".btn-menu-abrir").classList.remove("remover-botao");
    document.querySelector(".btn-menu-abrir").classList.add("exibir-botao");
}

function fecharMensagem(){
    document.querySelector(".mensagens").classList.remove("show");
}
