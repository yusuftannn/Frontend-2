// ********** fetch api ile çalışmak ********** //

// JSON dosyadan veri çekmek:
fetch("data/settings.json").then(
    response => response.json()

).then(responseJson => {
    console.log(responseJson.userName)
})

// API üzerinden veri çektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => { console.log(responseJson) })

// posts içindeki bilgilerden 0. yı ekrana yazdırdık.
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    console.log(responseJson[0]
    )
})

let userLisDOM = document.querySelector("#userList")
// Bilgileri listeye eklemek yazdırmak // 
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = item.title
        userLisDOM.appendChild(liDOM)
    });
})