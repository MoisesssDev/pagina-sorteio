let input = document.getElementById('nomes');
let pessoas = [];
let lista = document.getElementById('lista');

function adicionar(){
    pessoas.push(input.value);
    console.log(pessoas);
    input.value = "";

}

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
    
        var btn = document.querySelector("#submit");
      
      btn.click();
    
    }
  });

function gerarLista(){

    for (let i in pessoas){
        document.getElementById('lista-participantes').innerHTML = "<h2>Lista de participantes</h2>"
        let item = document.createElement('li');
        item.innerHTML = pessoas[i];
        lista.appendChild(item);
    }
}

function sortear(){
    let qtdPessoas = pessoas.length;
    let pessoaSorteado = Math.floor(Math.random() * qtdPessoas);

    document.getElementById('pessoa-sorteada').innerHTML = "Parabéns o nome sorteado foi ... <br><br>";
    document.getElementById('img-foguete').innerHTML = "<img src='assets/gif/icons8-foguete-1--unscreen.gif' alt=''>" ;
    document.getElementById('nome-pessoa').innerHTML ="<h2>" + pessoas[pessoaSorteado] + "</h2>" ;

}