class ListaConvidados {

    constructor() {
        this.contador = 0;
        this.idEdicao = null;
        this.convidados = [];
    }

    lerDados() {
        //Pegar os dados da tela
        let nome = document.getElementById("inputNome").value;
        let idade = document.getElementById("inputIdade").value;
        let elementoSexo = document.querySelector("input[type=radio]:checked");

        let convidado = {}

        if (elementoSexo != null) {
            convidado.sexo = elementoSexo.value;
        } else {
            convidado.sexo = ""
        }

        convidado.nome = nome;
        convidado.idade = idade;
        convidado.id = this.contador;


        return convidado;
    }

    buscarConvidados() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                this.convidados = JSON.parse(xhttp.responseText);
                this.gerarTabela();
            }
        };
        xhttp.open("GET", "https://fdp-2018-modulo2.herokuapp.com/convidados", true);
        xhttp.send();
    }

    inserirConvidadoAPI() {
        let convidado = this.lerDados()
        if (this.validar(convidado)) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = () => {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                   this.buscarConvidados();
                }
            };
            xhttp.open("POST", "https://fdp-2018-modulo2.herokuapp.com/convidados", true);
            xhttp.setRequestHeader("Content-Type", "application/json")
            xhttp.send(JSON.stringify(convidado));
        }
    }

    //EDITAR
    //No método editar deverá ser enviado o objeto inteiro no corpo da requisição pelo método PUT, contendo o atributo _id do objeto a ser editado

    //EXCLUIR
    //No método exluir deverá ser enviado o atributo _id do objeto a ser excluído no final da requisição .../convidados/"_id"
    validar(convidado) {
        let mensagem = "";

        if (convidado.nome == "") {
            mensagem += "Campo nome obrigatório!\n"
        }

        if (convidado.idade == "") {
            mensagem += "Campo idade obrigatório!\n"
        }

        if (convidado.sexo == "") {
            mensagem += "Campo sexo obrigatório!\n"
        }

        if (mensagem == "") {
            return true;
        }

        alert(mensagem)
        return false;
    }

    salvar() {

        let convidadoRetornado = this.lerDados();

        if (this.validar(convidadoRetornado)) {
            if (this.idEdicao == null) {
                this.convidados.push(convidadoRetornado);
                this.contador++;
                this.gerarTabela();
            } else {
                convidadoRetornado.id = this.idEdicao;
                for (let i = 0; i < this.convidados.length; i++) {
                    if (this.convidados[i].id == this.idEdicao) {
                        this.convidados.splice(i, 1, convidadoRetornado);
                    }
                }
                this.idEdicao = null;
                this.gerarTabela();
            }
        }

        this.limpar();
    }

    gerarTabela() {

        let tabela = document.getElementById("tabela");
        tabela.innerHTML = "";

        //Percorre todos os elementos do array convidados
        for (let i = 0; i < this.convidados.length; i++) {
            let convidadoCorrente = this.convidados[i];

            let linha = tabela.insertRow();

            let celulaNome = linha.insertCell(0);
            let celulaIdade = linha.insertCell(1);
            let celulaSexo = linha.insertCell(2);
            let celulaEditar = linha.insertCell(3);
            let celulaExcluir = linha.insertCell(4);

            let imagemEditar = document.createElement("img");
            imagemEditar.setAttribute("src", "img/edit.svg");
            // imagemEditar.setAttribute("onclick", "lista.editar('" + id + "')");
            imagemEditar.setAttribute("onclick", `lista.editar('${convidadoCorrente.id}', '${convidadoCorrente.nome}', '${convidadoCorrente.idade}', '${convidadoCorrente.sexo}')`);
            imagemEditar.classList.add("tamanho-imagem");

            let imagemExcluir = document.createElement("img");
            imagemExcluir.setAttribute("src", "img/delete.svg");
            imagemExcluir.setAttribute("onclick", "lista.remover('" + convidadoCorrente.id + "')");
            imagemExcluir.classList.add("tamanho-imagem");

            celulaNome.innerText = convidadoCorrente.nome;
            celulaIdade.innerText = convidadoCorrente.idade;
            celulaSexo.innerText = convidadoCorrente.sexo;

            celulaEditar.appendChild(imagemEditar);
            celulaExcluir.appendChild(imagemExcluir);
        }
    }

    remover(id) {
        if (window.confirm("Tem certeza que deseja excluir este convidado?")) {
            for (let i = 0; i < this.convidados.length; i++) {
                if (this.convidados[i].id == id) {
                    this.convidados.splice(i, 1);
                }
            }

            this.gerarTabela();
        }
    }

    editar(id, nome, idade, sexo) {
        this.idEdicao = id;
        document.getElementById("inputNome").value = nome;
        document.getElementById("inputIdade").value = idade;
        if (sexo == "f") {
            document.getElementById("fem").checked = true;
        } else {
            document.getElementById("masc").checked = true;
        }
    }

    limpar() {
        document.getElementById("inputNome").value = "";
        document.getElementById("inputIdade").value = "";
        document.getElementById("masc").checked = false;
        document.getElementById("fem").checked = false;
    }
}

var lista = new ListaConvidados();