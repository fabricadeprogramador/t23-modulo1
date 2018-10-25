class Estacionamento {
    constructor() {
        this.carros = [];
        this.carro = {};
    }

    lerDados() {

        let nome = document.getElementById("nome").value;
        let marca = document.getElementById("marca").value;
        let ano = document.getElementById("ano").value;



        this.carro.nome = nome;
        this.carro.marca = marca;
        this.carro.ano = ano;


    }

    salvar() {
        this.lerDados();   
        if (this.validar())
            this.carros.push(this.carro);
        this.limpar();

    }

    validar() {

        let mensagem = "";
        if (this.carro.nome == "") {
            mensagem += "O nome do carro deve ser preenchido."
        }
        if (this.carro.marca == "") {
            mensagem += "A marca do carro deve ser preenchida."
        }
        if (this.carro.ano == "") {

            mensagem += "O ano deve ser preenchido"
        } else {
            this.carro.ano = parseFloat(this.carro.ano);

        }

        if(mensagem == ""){
            return true;
        }

        alert(mensagem + " ");
        return false;

    }

    limpar() {
        document.getElementById("nome").value = "";
        document.getElementById("marca").value = "";
        document.getElementById("ano").value = "";
    }

    gerarTabela() {
        

        let tabela = document.getElementById("tabela");
        tabela.innerHTML="";
        for(let i=0;i< this.carros.length;i++){

                let linha = tabela.insertRow();
                let celulaNome = linha.insertCell(0);
                let celulaMarca = linha.insertCell(1);
                let celulaAno = linha.insertCell(2);

                let imagemEditar = document.createElement("img");
                
        }

    }
}

let estacionamento = new Estacionamento();