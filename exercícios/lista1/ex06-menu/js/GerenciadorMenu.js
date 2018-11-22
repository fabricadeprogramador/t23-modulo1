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
        document.getElementById("qtd-op3").innerText = "Qtd: " + 0 + "\n";
        document.getElementById("resultado-op3").innerText = "";
    }

    verificarOcorrenciasdeUm(){
        let limite = document.getElementById("limite-op3").value;
        if (limite != "")
            limite = parseInt(limite);

        let indice = 0;
        let contador = 0;
        let lista = "";

        //Laço que anda de 0 até o numero limite digitado pelo usuário
        while (indice < limite) {
            //flag usada pra não imprimir mais de uma vez o número
            let flag = false;

            //Separa o numero do índice por algarismo e coloca em um array (num)
            let num = indice.toString().split("");

            //Percorre o array com o número para verificar se tem o número um e quantas vezes ele aparece
            for (let index = 0; index < num.length; index++) {
                //Verifica se a posição atual é o número 1
                if (num[index] == "1") {
                    //Verifica se esse número já foi impresso
                    if (!flag) {
                        //Adiciona na lista somente se o número não foi inserido ainda
                        lista += indice + " ";
                        //Após inserir a primeira vez não insere mais pra impressão
                        flag = true;
                    }

                    //Encontrou o número 1, incrementa
                    contador++;
                }
            }
            //Como não se trata de um laço "for" temos que incrementar o índice 
            indice++;
        }

        document.getElementById("qtd-op3").innerText = "Qtd: " + contador + "\n";
        document.getElementById("resultado-op3").innerText = lista;
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