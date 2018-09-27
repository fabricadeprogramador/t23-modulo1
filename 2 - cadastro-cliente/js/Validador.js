class Validador{

    validar(){

        let mensagens = "";

        let inputNome = document.getElementById("nome").value;
        let inputEmail = document.getElementById("email").value;
        let inputMasc = document.getElementById("masc").checked;
        let inputFem = document.getElementById("fem").checked;

        if(inputNome == ""){
            mensagens += "O campo nome é obrigatório! \n"
        }

        if(inputEmail == ""){
            mensagens += "O campo e-mail é obrigatório!\n";
        }

        if(inputMasc == false && inputFem == false){
            mensagens +="O campo sexo é obrigatório!\n";
        }

        // let sexo = document.querySelector("[type=radio]:checked");

        // if(sexo == null){
        //     alert("O campo sexo é obrigatório!")
        // }

        let qtdCursos = document.querySelectorAll("[type=checkbox]:checked").length;

        if(qtdCursos == 0){
            mensagens += "Escolha pelo menos um curso de interesse!\n";
        }

        let estado = document.getElementById("estado").value;

        if(estado == ""){
            mensagens += "Selecione o estado!\n";
        }

        let foto = document.getElementById("foto").value;

        if(foto == ""){
            mensagens += "Selecione uma foto!\n";
        }

        let dataNasc = document.getElementById("datanasc").value;

        if(dataNasc == ""){
            mensagens += "Data de Nascimento obrigatória!\n";
        }

        if(mensagens != ""){
            // alert(mensagens);
            document.getElementById("textoMensagem").innerText = mensagens;
            document.querySelector(".mensagens").classList.add("show");
        }
    }
}

let validador = new Validador();