var convidado = "";
class ListaConvidados {

    adicionar() {

        if (document.getElementById("inputConvidado").value == "") {
            alert("Insira o nome do convidado!")
        } else {
            convidado += document.getElementById("inputConvidado").value + "\n\n";
            document.getElementById("lista").innerText = convidado;

            document.getElementById("inputConvidado").value = "";
        }
    }
}

var lista = new ListaConvidados();