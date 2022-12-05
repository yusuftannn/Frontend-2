// ********** FOR DÖNGÜSÜ ********** //

let users = ["Lorem", "Ipsum", "Dolor"]


// ******** 1 ******** //
// for (let index = 0; index < 10; index++) {
//     console.log(index);
// }


// ******** 2 ******** //
// let index = 0; 

// for (; index < 10; index++) {
//     console.log(index);
// }

// ******** 3 - dizi elemanlarını görmek (lorem, ıpsum, dolor ekrana yazar) ******** //
// for (let index = 0; index < users.length; index++) {
//     console.log(users[index])   
// }

// ******** 4 - bilgiyi index sayfasında görmek ******** //
const userListDOM = document.querySelector('#userList')

for (let index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li');
    liDOM.innerHTML = users[index];
    userListDOM.appendChild(liDOM);
}