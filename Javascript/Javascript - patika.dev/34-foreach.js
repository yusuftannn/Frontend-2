// ********** FOREACH ********** //

const PRODUCTS = ["Asus", "Apple", "Microsoft", "Samsung", "Dell", "Casper", "Monster"]

// touppercase ile hepsini büyük harf yazdırabiliriz.
PRODUCTS.forEach((product, index) => console.log(product.toUpperCase(), index))




// const userListDOM = document.querySelector('#userList')

// for (let index = 0; index < users.length; index++) {
//     const liDOM = document.createElement('li');
//     liDOM.innerHTML = users[index];
//     userListDOM.appendChild(liDOM);
// }

const userListDOM = document.querySelector('#userList')

PRODUCTS.forEach(item => {
    const liDOM = document.createElement('li');
    liDOM.innerHTML = item;
    userListDOM.appendChild(liDOM)
})