let friends = []

function adicionarAmigo() {
    let name = document.querySelector('#amigo').value;

    if (name === '') {
        alert('Por favor, insira um nome válido!')
        return;
    } else {
        friends.push(name);
        document.getElementById('amigo').value='';
    }

}

