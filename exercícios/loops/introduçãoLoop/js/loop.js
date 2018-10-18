class Loop{
    constructor(){
        let obj = { "nome": "Maria", "idade":25 }
        let obj1 = { "nome": "Zé", "idade":40 }
        this.numeros = [obj, obj1];
    }

    imprimirNumeros(){
        let spanResultado = document.getElementById("resultado");

        for(let i = 0; i < this.numeros.length; i++){
            let nome = this.numeros[i].nome;
            let idade = this.numeros[i].idade;
            spanResultado.innerText = `${nome} ${idade}`;
        }
    }
}

let loop = new Loop();