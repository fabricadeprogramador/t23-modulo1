class Triangulo {

    identificar() {
        let lado1 = parseFloat(document.getElementById("lado1").value);
        let lado2 = parseFloat(document.getElementById("lado2").value);
        let lado3 = parseFloat(document.getElementById("lado3").value);

        let resultado = document.getElementById("resultado");

        if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3)) {
            alert("Insira os valores corretamente!")
        } else {

            if (lado1 == lado2) {
                //Lado1 == Lado2
                if (lado1 == lado3) {
                    //Lado1 == Lado2 == Lado3
                    resultado.innerText = "O triângulo é equilátero!";
                } else {
                    //Lado1 == Lado2 E Lado1 != Lado3
                    resultado.innerText = "O triângulo é isóceles!";
                }
            } else if (lado1 != lado3) {
                if (lado2 == lado3) {
                    //Lado1 != Lado2 E Lado1 != Lado3 E Lado2 == Lado3
                    resultado.innerText = "O triângulo é isóceles!";
                } else {
                    //Lado1 != Lado2 != Lado3
                    resultado.innerText = "O triângulo é escaleno!";
                }
            } else {
                //Lado1 != Lado2 E Lado1 == Lado3
                resultado.innerText = "O triângulo é isóceles!";
            }

            //Limpa os campos
            document.getElementById("lado1").value = "";
            document.getElementById("lado2").value = "";
            document.getElementById("lado3").value = "";
        }

    }
}

let triangulo = new Triangulo();