class GerenciadorMenu{

    constructor(){
        this.nomes = [];
        this.tentativas = 5;
    }

    selecionarOpcao(){
        let op = document.getElementById("opcao").value;

        if(op == ""){
            alert("Selecione uma das opções!");
            return
        }

        let opNum = parseInt(op);

        switch(opNum){
            case 1:
                this.opcao1();
                break;
            case 2:
                this.opcao2();
                break;
            case 3:
                this.opcao3();
                break;
        }
    }

    opcao1(){
        let impares = "";

        for(let i = 0; i <= 100; i++){
            if(i % 2 != 0){
                impares += i + " ";
            }
        }

        document.getElementById("span-op1").innerText = impares;
    }

    opcao2(){
        document.getElementById("span-op2").innerText = `Tentativas: ${this.tentativas} | ${this.nomes}`;
    }

    opcao3(){

    }

    verificarOcorrenciasdeUm(){
        let limiteStr = document.getElementById("limite-op3").value;

        if(limiteStr == ""){
            alert("Digite o valor limite!")
            return;
        }

        let limite = parseInt(limiteStr);
        let i = 1;

        while(i <= limite){
            

            i++;
        }
    }

    voltar(){

    }

    adicionarNome(){
        if(this.tentativas == 0){
            alert("Suas tentativas acabaram!");
            return;
        }

        let nome = document.getElementById("input-op2").value;

        if(nome == ""){
            alert("Nome Vazio!");
            return;
        }

        this.nomes.push(nome);
        this.tentativas--;

        this.verificarNome();

        // if(nome == "Jão"){
        //     alert("Parabéns você encontrou o nome secreto!");
        //     this.tentativas = 5;
        //     this.nomes = [];
        //     this.voltar();
        // } else {
        //     this.nomes.push(nome);
        //     this.tentativas--;
        //     this.opcao2();
        // }
    }

    verificarNome(){
        let i = -1;
        let encontrou = false;

        do{
            i++;
            if(this.nomes[i] == "Jão"){
                encontrou = true;
            }
            
        }while(!encontrou && i < this.nomes.length);

        if(encontrou){
            alert("Parabéns você encontrou o nome secreto!");
            this.tentativas = 5;
            this.nomes = [];
            this.voltar();
        } 

        this.opcao2();
    }
}
let gerenciador = new GerenciadorMenu();