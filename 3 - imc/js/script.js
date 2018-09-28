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
            let peso = parseFloat(document.getElementById("peso").value);
            let altura = parseFloat(document.getElementById("altura").value);

            let resultado = peso / (altura * altura);
            let elementoSpan = document.getElementById("resultadoClassificacao");

            elementoSpan.classList.value = "";

            if(resultado <= 18){
                elementoSpan.innerText = "Abaixo do Peso!";
                elementoSpan.classList.add("textoVermelho");

                // document.getElementById("resultadoClassificacao").innerHTML = "<span style='color:red'>Abaixo do peso!</span>" ;
            } else if(resultado <= 25){
                elementoSpan.innerText = "Ideal!";
                elementoSpan.classList.add("textoAzul");
            }else if(resultado <= 30){
                elementoSpan.innerText = "Sobre o peso!";
                elementoSpan.classList.add("textoAmarelo");
            } else if(resultado <= 35){
                elementoSpan.innerText = "Obesidade 1!";
                elementoSpan.classList.add("textoLaranja");
            }else if(resultado <= 40){
                elementoSpan.innerText = "Obesidade 2!";
                elementoSpan.classList.add("textoRoxo");
            }else {
                elementoSpan.innerText = "Obesidade 3!";
                elementoSpan.classList.add("textoPreto");
            }

        }

    }

    limpar() {
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
    }
}

var calculadora = new CalculadoraIMC();