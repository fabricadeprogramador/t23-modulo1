class CalculadoraIMC{

    calcularIMC(){
        var peso = parseFloat(document.getElementById("peso").value);
        var altura = parseFloat(document.getElementById("altura").value);

        var resultado = peso / (altura * altura);

        alert("O seu IMC é: " + resultado);
    }

    limpar(){
        document.getElementById("peso").value = "";
        document.getElementById("altura").value = "";
    }
}

var calculadora = new CalculadoraIMC();