alert("Teste!");
console.log("teste");


class TestePai{
    constructor(){
    this.nome = "pai";
    this.atributo = 5;
    }
    getNome(){
        console.log(this.nome);
        return name;
    }
    metodo(){
        
    }
}

class Teste extends TestePai{
    constructor(){
        super();
        this.nome = "filho";
    }

    outro(){
        console.log(this.nome + ' - ' + this.atributo);
    }
} 

var testeFilho = new Teste();

document.getElementById("botao").onclick = function(){
    testeFilho.outro();
}