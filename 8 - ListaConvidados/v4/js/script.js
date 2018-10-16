class ListaConvidados {

    constructor() {
        this.contador = 0;
        this.idEdicao = null;
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


        return convidado;
    }

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
            let tabela = document.getElementById("tabela");

            if (this.idEdicao == null) {
                let linha = tabela.insertRow();
                let id = "linha-" + this.contador;
                linha.id = id;

                let celulaNome = linha.insertCell(0);
                let celulaIdade = linha.insertCell(1);
                let celulaSexo = linha.insertCell(2);
                let celulaEditar = linha.insertCell(3);
                let celulaExcluir = linha.insertCell(4);

                let imagemEditar = document.createElement("img");
                imagemEditar.setAttribute("src", "img/edit.svg");
                // imagemEditar.setAttribute("onclick", "lista.editar('" + id + "')");
                imagemEditar.setAttribute("onclick", `lista.editar('${id}', '${convidadoRetornado.nome}', '${convidadoRetornado.idade}', '${convidadoRetornado.sexo}')`);
                imagemEditar.classList.add("tamanho-imagem");

                let imagemExcluir = document.createElement("img");
                imagemExcluir.setAttribute("src", "img/delete.svg");
                imagemExcluir.setAttribute("onclick", "lista.remover('" + id + "')");
                imagemExcluir.classList.add("tamanho-imagem");

                celulaNome.innerText = convidadoRetornado.nome;
                celulaIdade.innerText = convidadoRetornado.idade;
                celulaSexo.innerText = convidadoRetornado.sexo;

                celulaEditar.appendChild(imagemEditar);
                celulaExcluir.appendChild(imagemExcluir);

                this.contador++;
            } else {
                let elementoEdicao = document.getElementById(this.idEdicao)
                elementoEdicao.childNodes[0].innerText = convidadoRetornado.nome;
                elementoEdicao.childNodes[1].innerText = convidadoRetornado.idade;
                elementoEdicao.childNodes[2].innerText = convidadoRetornado.sexo;
            }
        }

        this.limpar();
    }

    remover(id) {
        if (window.confirm("Tem certeza que deseja excluir este convidado?")) {
            let elementoExcluir = document.getElementById(id);
            elementoExcluir.remove();
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

var lista = new ListaConvidados(12);