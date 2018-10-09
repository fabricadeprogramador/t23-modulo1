var contador = 0;
var idMarcadoParaEdicao = null;

class ListaConvidados {

    salvar() {

        if (document.getElementById("inputConvidado").value == "") {
            alert("Insira o nome do convidado!")
        } else {


            if (idMarcadoParaEdicao == null) {
                //Pegando o nome do convidado do input
                let nomeConvidado = document.getElementById("inputConvidado").value;

                //Pegando o elemento div da lista
                let elementoLista = document.getElementById("lista");

                //Criar os elementos dinamicamente
                let divExterna = document.createElement("div");
                let spanInterno = document.createElement("span");
                let imgInterna = document.createElement("img");
                let imgEdit = document.createElement("img");

                //Setando classe CSS e ID da div
                divExterna.classList.add("item-lista");
                let idNovo = "item-" + contador;
                divExterna.setAttribute("id", idNovo);

                //Setando o onClick do imagem de remoção
                imgInterna.setAttribute("onclick", "lista.remover('" + idNovo + "')");

                //Setando o onClick do imagem de edição
                imgEdit.setAttribute("onclick", "lista.editar('" + idNovo + "')");


                //Setar os dados necessários

                //Setar o nome dentro do span
                spanInterno.innerText = nomeConvidado;

                //Setar a imagem no elemento img
                imgInterna.setAttribute("src", "img/delete.svg");

                //Setar a imagem no elemento img de edição
                imgEdit.setAttribute("src", "img/edit.svg");

                //Adicionar span e img como filhos da div criada
                divExterna.appendChild(spanInterno);
                divExterna.appendChild(imgInterna);
                divExterna.appendChild(imgEdit);

                //Adicionar a div criada como filha da lista
                elementoLista.appendChild(divExterna);

                //Incremento do contador
                contador++;
            } else {
                 //Pegando o nome do convidado do input
                 let nomeConvidado = document.getElementById("inputConvidado").value;
                 document.getElementById(idMarcadoParaEdicao).childNodes[0].innerText = nomeConvidado;

                 idMarcadoParaEdicao = null;
            }


        }
    }

    remover(idDaRemocao) {
        document.getElementById(idDaRemocao).remove();
    }

    editar(idDaEdicao) {
        let elementoDiv = document.getElementById(idDaEdicao);
        let convidadoEditar = elementoDiv.childNodes[0].textContent;

        document.getElementById("inputConvidado").value = convidadoEditar;

        idMarcadoParaEdicao = idDaEdicao;
    }
}

var lista = new ListaConvidados();