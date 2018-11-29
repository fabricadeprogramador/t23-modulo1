function somar(n1, n2, callback){
    s = n1 + n2;
    callback(s);
}

function subtrair(n1, n2){
    return n1 - n2;
}

function imprimirAlerta(txt){
    alert(txt);
}

function imprimirConsole(txt){
    console.log(txt)
}

var fn3 = function(res){
    res = res - 27;
    console.log("FUNÇÃO 3: "  + res);
}

function multiplicaPorDois(res){
    res = res * 2;
    imprimirAlerta(res);
}


// somar(10, 20, imprimirAlerta)
// somar(20, 30, imprimirConsole)
// somar(30, 40, 
// function(r){
//     r = r + 25;
//     console.log("ANONIMA: " + r)
// })
// somar(50, 30, fn3);
somar(30, 20, multiplicaPorDois);
