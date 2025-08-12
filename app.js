let friends = []

function adicionarAmigo() {
    let name = document.querySelector('#amigo').value;

    if (name === '') {
        alert('Por favor, insira um nome válido!')
        return;
    } else {
        if(!friends.includes(name)){
            friends.push(name);
            document.getElementById('amigo').value='';
        } 
    }
     mostrarAmigos();  
}

function mostrarAmigos(){
    let friendList = document.querySelector('#listaAmigos')
    friendList.innerHTML = '';

    friends.forEach(el => {
        friendList.innerHTML += `<li>${el}</li>`
    })
}

function sortearAmigo() {
    if (friends.length < 2) {
        alert('Insira ao menos dois nomes para realizar o sorteio!')
    } else {
        index = parseInt((Math.random() * friends.length));
         exibirTextoNaTela('resultado', friends[index])
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}