class ListaConvidados {

    adicionar() {

        if (document.getElementById("inputConvidado").value == "") {
            alert("Insira o nome do convidado!")
        } else {
          
            let elementoInput = document.getElementById("inputConvidado");
            let valorInput = elementoInput.value;

            let elementoLi = document.createElement("li");
            elementoLi.innerText = valorInput;

            let elementoUl = document.getElementById("lista");
            elementoUl.appendChild(elementoLi);
        }
    }
}

var lista = new ListaConvidados();