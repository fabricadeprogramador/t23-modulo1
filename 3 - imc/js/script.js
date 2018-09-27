class CalculadoraIMC {

    calcularIMC() {

        if (document.getElementById("peso").value == "" || document.getElementById("altura").value == "") {
            alert("Um ou mais campos vazios!");
        } else {
            var peso = parseFloat(document.getElementById("peso").value);
            var altura = parseFloat(document.getElementById("altura").value);

            var resultado = peso / (altura * altura);
            document.getElementById("resultadoIMC").innerText = "O seu IMC é: " + resultado;
        }
    }

    classificar() {
        if (document.getElementById("peso").value == "" || document.getElementById("altura").value == "") {
            alert("Um ou mais campos vazios!");
        } else {
            var peso = parseFloat(document.getElementById("peso").value);
            var altura = parseFloat(document.getElementById("altura").value);

            var resultado = peso / (altura * altura);
            
            if(resultado <= 18){
                var elementoSpan = document.getElementById("resultadoClassificacao");
                elementoSpan.innerText = "Abaixo do Peso!";
                elementoSpan.classList.add("textoVermelho");

                // document.getElementById("resultadoClassificacao").innerHTML = "<span style='color:red'>Abaixo do peso!</span>" ;

            }



        }

    }

    limpar() {
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
    }
}

var calculadora = new CalculadoraIMC();