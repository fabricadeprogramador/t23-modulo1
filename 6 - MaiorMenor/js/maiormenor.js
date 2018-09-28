class MaiorMenor {

    menor() {
        let valor1 = parseFloat(document.getElementById("n1").value);
        let valor2 = parseFloat(document.getElementById("n2").value);

        if (valor1 < valor2) {
            alert("O valor " + valor1 + " é menor!");
        } else if (valor1 > valor2) {
            alert("O valor " + valor2 + " é menor!");
        } else {
            alert("Os valores são iguais!");
        }
    }

    maior() {
        let valor1 = parseFloat(document.getElementById("n1").value);
        let valor2 = parseFloat(document.getElementById("n2").value);

        if (valor1 < valor2) {
            alert("O valor " + valor2 + " é maior!");
        } else if (valor1 > valor2) {
            alert("O valor " + valor1 + " é maior!");
        } else {
            alert("Os valores são iguais!");
        }
    }
}

let maiormenor = new MaiorMenor();