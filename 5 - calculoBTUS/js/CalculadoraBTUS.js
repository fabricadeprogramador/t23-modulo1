class CalculadoraBTUS{


    calcularBTUS(){

        var valorM2 = parseFloat(document.getElementById("inputAreaM2").value);
        var totalPessoas = parseFloat(document.getElementById("inputPessoas").value);
        var equipamentos = parseFloat(document.getElementById("inputEletronicos").value);

        var totalBTUS = (valorM2 * 600) + ((totalPessoas -1) * 600) + (equipamentos * 600);

        alert("Você precisa de " + totalBTUS + " BTUS.");
    }
}

var calculadoraBTUS = new CalculadoraBTUS();