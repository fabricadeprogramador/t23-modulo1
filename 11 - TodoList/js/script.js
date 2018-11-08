class Gerenciador{

        constructor(){

            this.lista = [];
            this.tarefa = {};
            this.contador = 0;
            this.idEdicao = null;
        }

        lerDados(){
            this.tarefa = {};

            let tarefa = document.getElementById("input").value;

            this.tarefa.descricao = tarefa;
            this.tarefa.concluida = false;
        }
        
        validar(){
            if(this.tarefa.descricao == ""){
                alert("Digite a descrição da tarefa!");
                return false;
            }
            return true;
        }
        
        salvar(){
            
            this.lerDados();

            if(this.validar()){
                if(this.idEdicao == null){
                    this.tarefa.id = this.contador;
                    this.lista.push (this.tarefa);
                    this.contador ++;
                } else{
                    for(let i = 0; i < this.lista.length ; i++){
                        if(this.idEdicao == this.lista[i].id){
                            this.lista[i].descricao = this.tarefa.descricao;
                            this.idEdicao=null;
                        }
                    }
                }
            this.gerarTabela();             
            }
            this.limpar();
        }

        editar(id){  
            for(let i=0; i < this.lista.length; i++){
                if(id == this.lista[i].id){
                    this.idEdicao = id;
                    document.getElementById("input").value = this.lista[i].descricao;

                }
            }
        }

        limpar(){

            document.getElementById("input").value = "";

        }

        gerarTabela(){

            let tabela = document.getElementById("tabela");
            tabela.innerHTML="";
            for(let i=0;i<this.lista.length;i++){

                let linha = tabela.insertRow();
                let celulaTarefa = linha.insertCell(0);
                let celulaDescricao = linha.insertCell(1);
                let celulaExcluir= linha.insertCell(2);
                let celulaEditar = linha.insertCell(3);

                let imagemEditar = document.createElement("img");
                imagemEditar.setAttribute("src", "img/edit.svg");
                imagemEditar.setAttribute("onclick", `gerenciador.editar(${this.lista[i].id})`);

                let imagemDeletar = document.createElement("img");
                imagemDeletar.setAttribute("src", "img/delete.svg");
                imagemDeletar.setAttribute("onclick", `gerenciador.excluir(${this.lista[i].id})`);

                let imagemMarcar = document.createElement("img");
                if(this.lista[i].concluida){
                    imagemMarcar.setAttribute("src" , "img/checked.svg");
                }else{
                    imagemMarcar.setAttribute("src" , "img/check.svg");
                }
                imagemMarcar.setAttribute("onclick", `gerenciador.marcar(${this.lista[i].id})`);

                celulaTarefa.appendChild(imagemMarcar);
                celulaDescricao.innerText = this.lista[i].descricao;
                celulaExcluir.appendChild(imagemDeletar);
                celulaEditar.appendChild(imagemEditar);
                
            }
        }

        excluir(id){

            if(window.confirm("Deseja realmente excluir?")){
                for(let i = 0; i < this.lista.length; i++){
                   if(id == this.lista[i].id){
                        this.lista.splice(i, 1);}
                }
            }
            this.gerarTabela();
        }

        marcar(id) {
            for(let i = 0; i< this.lista.length; i++){
                if(this.lista[i].id == id){
                    this.lista[i].concluida = !this.lista[i].concluida;
                }
            }
            this.gerarTabela();
        
        }
}

var gerenciador = new Gerenciador();