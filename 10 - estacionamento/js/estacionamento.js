class Estacionamento {
    constructor() {
        this.carros = [];
        this.carro = {};
        this.contador = 0;
        this.idEdicao = null;
    }

    lerDados() {

        let nome = document.getElementById("nome").value;
        let marca = document.getElementById("marca").value;
        let ano = document.getElementById("ano").value;

        this.carro = {};

        this.carro.nome = nome;
        this.carro.marca = marca;
        this.carro.ano = ano;

    }

    salvar() {
        this.lerDados();
        if (this.validar()) {
            if (this.idEdicao != null) {
                for (let i = 0; i < this.carros.length; i++) {
                    if (this.carros[i].id == this.idEdicao) {
                        this.carros[i].nome = this.carro.nome;
                        this.carros[i].marca = this.carro.marca;
                        this.carros[i].ano = this.carro.ano;
                        this.idEdicao = null;
                    }
                }
            } else {
                this.carro.id = this.contador;
                this.carros.push(this.carro);
                this.contador++;
            }
            this.gerarTabela();
        }

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

        if (mensagem == "") {
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
        tabela.innerHTML = "";
        for (let i = 0; i < this.carros.length; i++) {

            let linha = tabela.insertRow();
            let celulaNome = linha.insertCell(0);
            let celulaMarca = linha.insertCell(1);
            let celulaAno = linha.insertCell(2);
            let celulaEditar = linha.insertCell(3);
            let celulaExcluir = linha.insertCell(4);

            let imagemEditar = document.createElement("img");
            let imagemExcluir = document.createElement("img");

            imagemEditar.setAttribute("src", "img/edit.svg");
            imagemExcluir.setAttribute("src", "img/delete.svg");

            imagemEditar.setAttribute("onclick", `estacionamento.editar(${this.carros[i].id})`);
            imagemExcluir.setAttribute("onclick", `estacionamento.excluir(${this.carros[i].id})`);

            celulaNome.innerHTML = this.carros[i].nome;
            celulaMarca.innerHTML = this.carros[i].marca;
            celulaAno.innerHTML = this.carros[i].ano;

            celulaEditar.appendChild(imagemEditar);
            celulaExcluir.appendChild(imagemExcluir);

        }

    }

    editar(id) {

        for (let i = 0; i < this.carros.length; i++) {
            if (id == this.carros[i].id) {
                this.idEdicao = id;
                document.getElementById("nome").value = this.carros[i].nome;
                document.getElementById("marca").value = this.carros[i].marca;
                document.getElementById("ano").value = this.carros[i].ano;
            }


        }
    }
    excluir(id) {
        if (window.confirm("Deseja excluir?")) {
            for (let i = 0; i < this.carros.length; i++) {
                if (this.carros[i].id == id) {
                    this.carros.splice(i, 1);
                    this.gerarTabela();
                }
            }
        }
    }

    resultado() {

        let carroMaisVelho = this.carros[0];
        let carroMaisNovo = this.carros[0];
        let carrosMedia = 0;

        for (let i = 0; i < this.carros.length; i++) {
            carrosMedia = carrosMedia + this.carros[i].ano;
            if (carroMaisVelho.ano > this.carros[i].ano) {
                carroMaisVelho = this.carros[i];
            }
            if (carroMaisNovo.ano < this.carros[i].ano){
                carroMaisNovo = this.carros[i];
            }
            
        }
        carrosMedia = carrosMedia / this.carros.length;

        let stringCampoResposta = `Carro mais novo: ${carroMaisNovo.nome}, ${carroMaisNovo.ano}\n
        Carro mais velho: ${carroMaisVelho.nome}, ${carroMaisVelho.ano}\n
        Média dos carros: ${carrosMedia}`;


        document.getElementById("campoResposta").innerText = stringCampoResposta;
    }


}

let estacionamento = new Estacionamento();