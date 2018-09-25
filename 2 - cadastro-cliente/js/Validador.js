class Validador{

    validar(){

        let inputNome = document.getElementById("nome").value;
        let inputEmail = document.getElementById("email").value;
        let inputMasc = document.getElementById("masc").checked;
        let inputFem = document.getElementById("fem").checked;

        if(inputNome == ""){
            alert("O campo nome é obrigatório!");
        }

        if(inputEmail == ""){
            alert("O campo e-mail é obrigatório!");
        }

        if(inputMasc == false && inputFem == false){
                alert("O campo sexo é obrigatório!");
        }

        // let sexo = document.querySelector("[type=radio]:checked");

        // if(sexo == null){
        //     alert("O campo sexo é obrigatório!")
        // }

        let qtdCursos = document.querySelectorAll("[type=checkbox]:checked").length;

        if(qtdCursos == 0){
            alert("Escolha pelo menos um curso de interesse!");
        }

        let estado = document.getElementById("estado").value;

        if(estado == ""){
            alert("Selecione o estado!");
        }

        let foto = document.getElementById("foto").value;

        if(foto == ""){
            alert("Selecione uma foto!")
        }

        let dataNasc = document.getElementById("datanasc").value;

        if(dataNasc == ""){
            alert("Data de Nascimento obrigatória!")
        }
    }
}

let validador = new Validador();