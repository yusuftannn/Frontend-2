// ********** if-else farklı bir yazımı ********** //

let userName = prompt("Kullanıcı adınızı giriniz")
let info = document.querySelector("#info")

// ? koşulu bitirir
// userName : "Kullanıcı bilginiz bulunamadı :"     --> değilse kısmı

info.innerHTML = `${userName.length > 0 ? userName : "Kullanıcı bilginiz bulunamadı :"}`

// kod açıklaması --        > 0 ise yaz ? koşulu bitirir değilse userName: " " içini yaz