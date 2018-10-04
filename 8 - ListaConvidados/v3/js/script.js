var contador = 0;

class ListaConvidados {

    adicionar() {
        
        if (document.getElementById("inputConvidado").value == "") {
            alert("Insira o nome do convidado!")
        } else {
          
            //Pegando o nome do convidado do input
            let nomeConvidado = document.getElementById("inputConvidado").value;
            
            //Pegando o elemento div da lista
            let elementoLista = document.getElementById("lista");

            //Criar os elementos dinamicamente
            let divExterna = document.createElement("div");
            let spanInterno = document.createElement("span");
            let imgInterna = document.createElement("img");

            //Setando classe CSS e ID da div
            divExterna.classList.add("item-lista");
            let idNovo = "item-" + contador;
            divExterna.setAttribute("id", idNovo);

            //Setando o onClick do imagem de remoção
            imgInterna.setAttribute("onclick", "lista.remover('" + idNovo + "')" );
            

            //Setar os dados necessários

            //Setar o nome dentro do span
            spanInterno.innerText = nomeConvidado;

            //Setar a imagem no elemento img
            imgInterna.setAttribute("src", "img/delete.svg");

            //Adicionar span e img como filhos da div criada
            divExterna.appendChild(spanInterno);
            divExterna.appendChild(imgInterna);

            //Adicionar a div criada como filha da lista
            elementoLista.appendChild(divExterna);

            //Incremento do contador
            contador++;
        }
    }

    remover(itemId){
        document.getElementById(itemId).remove();
    }
}

var lista = new ListaConvidados();