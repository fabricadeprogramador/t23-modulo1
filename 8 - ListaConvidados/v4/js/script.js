class ListaConvidados {

    constructor(){
        this.contador = 0;
        this.idEdicao = null;
    }

      salvar(convidado) {

        //Pegar os dados da tela
        let nome = document.getElementById("inputNome").value;
        let idade  = document.getElementById("inputIdade").value;
        let sexo = document.querySelector("input[type=radio]:checked").value;

        let tabela = document.getElementById("tabela");

        if(this.idEdicao == null){
            let linha  = tabela.insertRow();
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
            imagemEditar.setAttribute("onclick", `lista.editar('${id}', '${nome}', '${idade}', '${sexo}')`);
            imagemEditar.classList.add("tamanho-imagem");
    
            let imagemExcluir = document.createElement("img");
            imagemExcluir.setAttribute("src", "img/delete.svg");
            imagemExcluir.setAttribute("onclick", "lista.remover('" + id + "')");
            imagemExcluir.classList.add("tamanho-imagem");
    
            celulaNome.innerText = nome;
            celulaIdade.innerText = idade;
            celulaSexo.innerText = sexo;
    
            celulaEditar.appendChild(imagemEditar);
            celulaExcluir.appendChild(imagemExcluir);

            this.contador++;
        } else {
            let elementoEdicao = document.getElementById(this.idEdicao)
            elementoEdicao.childNodes[0].innerText = nome;
            elementoEdicao.childNodes[1].innerText = idade;
            elementoEdicao.childNodes[2].innerText = sexo;
        }

       this.limpar();
    }

    remover(id) {
       if(window.confirm("Tem certeza que deseja excluir este convidado?")){
           let elementoExcluir = document.getElementById(id);
           elementoExcluir.remove();
       } 
    }

    editar(id, nome, idade, sexo) {
        this.idEdicao = id;
        document.getElementById("inputNome").value = nome;
        document.getElementById("inputIdade").value = idade;
        if(sexo == "f"){
            document.getElementById("fem").checked = true;
        } else{
            document.getElementById("masc").checked = true;
        }
    }

    limpar(){
        document.getElementById("inputNome").value = "";
        document.getElementById("inputIdade").value = "";
        document.querySelector("input[type=radio]:checked").checked = false;
    }
}

var lista = new ListaConvidados(12);