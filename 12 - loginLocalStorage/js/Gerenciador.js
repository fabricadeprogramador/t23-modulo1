class Gerenciador {

    constructor() {
        this.usuarioRegistro = {};
        this.usuarioLogin = {};
        this.usuarioNome="jao";

    }

    lerDadosDoRegistro() {
        this.usuarioRegistro.nome = document.getElementById("nome").value;
        this.usuarioRegistro.user = document.getElementById("username").value;
        this.usuarioRegistro.senha = document.getElementById("senha").value;
    }

    lerDadosDoLogin() {
        this.usuarioLogin.user = document.getElementById("inputUsername").value;
        this.usuarioLogin.senha = document.getElementById("inputPassword").value;
    }

    validar() {

        let mensagem = "";
        if (this.usuarioRegistro.nome == "") {
            mensagem += " Digite o nome!";
        }
        if (this.usuarioRegistro.userName == "") {
            mensagem += "digite o nome do usuario!";
        }
        if (this.usuarioRegistro.senha == "") {
            mensagem += "digite a senha!";
        }
        if (mensagem == "") {
            return true;
        }
        alert(mensagem);
        return false;
    }

    registrarUsuario() {
        this.lerDadosDoRegistro();
        if (this.suportaStorage()) {
            if (this.validar()) {
                localStorage.setItem(this.usuarioRegistro.user, JSON.stringify(this.usuarioRegistro));
                
                window.location.href = "login.html";
            }
        } else {
            alert("Browser nao suporta local storage!");
        }
    }

    loginUsuario() {
        this.lerDadosDoLogin();
        let usuarioRetornado = localStorage.getItem(this.usuarioLogin.user);
        if (usuarioRetornado == null) {
            alert("Usuario ou senha invalida!!");
        } else {
            let usuarioConvertido = JSON.parse(usuarioRetornado);
            if (this.usuarioLogin.senha == usuarioConvertido.senha) {
                window.location.href = `home.html?nome=${usuarioConvertido.nome}`;
            } else{
                alert("Senha Invalida!");
            }
        }
    }

    suportaStorage() {
        if (typeof (Storage) !== "undefined") {
            return true;
        } else {
            return false;
        }
    }

    mostrarNome(){

        let URL = window.location.href;

        let posicao = URL.lastIndexOf("=");

        let nomeDecodificado = URL.slice(posicao + 1, URL.length);

        let nome = decodeURI(nomeDecodificado)

        alert(nome)

        document.getElementById("spanNome").innerText = nome; 
    }

    removerUsuario() {
        let usuarioApagar=JSON.parse(localStorage.getItem("usuarioLogado"));
        localStorage.removeItem(usuarioApagar.user);
        window.location.href = "login.html"
    }


}

let gerenciador = new Gerenciador();