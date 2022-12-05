// ********** Formlarla çalışmak: Bölüm sonu egzersizi ********** //

/*
1: Formu seç
2: İnput bilgisini UL içerisine ekle
3: Form içindeki bilgiyi sıfırla
4: Eğer form a bilgi girilmezse kullanıcıyı uyar
*/

let userFormDOM = document.querySelector('#userForm');
userFormDOM.addEventListener('submit', formHandler);
addItem(USER_NAME.value, SCORE.value);

function formHandler(event) {
    event.preventDefault();
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score");
}

const addItem = (userName, score) => {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = `
    ${userName} <span class="badge bg-primary rounded-pill">${score}</span> 
    <button class="btn btn-primary"onclick="this.parentNode.remove();">Sil</button>
    `;
    liDOM.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    userListDOM.append(liDOM);
}
