class ListaNumeros{

    constructor(){
        this.lista = []
    }

    limpar(){
        document.getElementById("inputNumero").value = "";
    }

    adicionar(){
        let valor = document.getElementById("inputNumero").value;
        if(valor != ""){
            this.lista.push(valor);
            this.limpar();
        }
    }

    imprimir(){
        let valores = "";
        for(let i = 0; i < this.lista.length; i++){
            valores += this.lista[i] + " ";
        }

        document.getElementById("resultado").innerText = valores;
    }
}

let listaNumeros = new ListaNumeros();