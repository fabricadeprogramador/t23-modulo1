class ParesImpares{

    constructor(){
        this.numeros = [];
    }

    adicionar(){
        let numero = document.getElementById("entrada").value;

        if(numero == ""){
            alert("Digite o número primeiro!");
        } else{
            let valor = parseFloat(numero);
            this.numeros.push(valor);
        }
    }

    pares(){
        let pares = "";

        for(let i  = 0; i < this.numeros.length; i++){
            if(this.numeros[i] % 2 == 0){
                pares += this.numeros[i] + " ";
            }
        }

        document.getElementById("resultado").innerText = pares;
    }

    impares(){
        let impares = "";

        for(let i  = 0; i < this.numeros.length; i++){
            if(this.numeros[i] % 2 != 0){
                impares += this.numeros[i] + " ";
            }
        }

        document.getElementById("resultado").innerText = impares;
    }
}

let paresImpares = new ParesImpares();