class Calculadora {

    somar() {
        var n1 = document.getElementById("input1").value;

        var n2 = document.getElementById("input2").value;

        var resultado = parseFloat(n1) + parseFloat(n2);

        alert("SOMA: " + resultado);
    }

    subtrair() {
        var n1 = document.getElementById("input1").value;

        var n2 = document.getElementById("input2").value;

        var resultado = parseFloat(n1) - parseFloat(n2);

        alert("SUBTRAÇÃO: " + resultado);
    }

    multiplicar() {
        var n1 = document.getElementById("input1").value;

        var n2 = document.getElementById("input2").value;

        var resultado = parseFloat(n1) * parseFloat(n2);

        alert("MULTIPLICAÇÃO: " + resultado);
    }

    dividir() {
        var n1 = document.getElementById("input1").value;

        var n2 = document.getElementById("input2").value;

        var resultado = parseFloat(n1) / parseFloat(n2);

        alert("DIVISÃO: " + resultado);

    }

    porcentagem(){
        var n1 = parseFloat(document.getElementById("input1").value);

        var n2 = parseFloat(document.getElementById("input2").value);

        var resultado = (n1 / n2) * 100;

        alert(n1 + " é " + resultado + "%" + " de " + n2);
    }

}

var calc = new Calculadora();