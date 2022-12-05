let userName = prompt("Kullanıcı adınızı giriniz:")
let info = document.querySelector("#info")
if (userName) {
    info.innerHTML = `Merhaba, ${userName} Hoşgeldiniz`
} else {
    info.innerHTML = "Lütfen kullanıcı adınızı giriniz."
}