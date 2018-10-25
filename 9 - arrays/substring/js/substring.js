class Substring{

    constructor(){
        this.strs = [];
        this.ocorrencias = [];
    }

    adicionar(){
        let str = document.getElementById("string").value;
        this.strs.push(str);
    }

    verificar(){
        
        let substr = document.getElementById("substring").value;
        let resultado = "";
        
        for(let i  = 0; i < this.strs.length; i++){
            if(this.strs[i].indexOf(substr) != -1){
                this.ocorrencias.push(this.strs[i]);
            }
        }
        
        document.getElementById("resultado").innerText = "A substring ocorre em: " + this.ocorrencias;
    }
}

let substring = new Substring();