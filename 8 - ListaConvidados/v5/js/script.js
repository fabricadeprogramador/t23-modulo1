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
            if(this.idEdicao == null){
                this.convidados.push(convidadoRetornado);
                this.contador++;
                this.gerarTabela();
            } else {
                convidadoRetornado.id = this.idEdicao;
               for(let i = 0; i < this.convidados.length; i++){
                   if(this.convidados[i].id == this.idEdicao){
                        this.convidados.splice(i,1, convidadoRetornado);
                   }
               }
            }
        }

        this.limpar();
    }

    gerarTabela(){

        let tabela = document.getElementById("tabela");
        tabela.innerHTML = "";

        //Percorre todos os elementos do array convidados
        for(let i = 0; i < this.convidados.length; i++){
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
           for(let i = 0; i < this.convidados.length; i++){
               if(this.convidados[i].id == id){
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