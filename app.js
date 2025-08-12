let friends = []

function addFriend() {
    let name = document.querySelector('#friend').value;

    if (name === '') {
        alert('Por favor, insira um nome!')
        return;
    } else {
        friends.push(name);
        console.log(friends);
    }
}

