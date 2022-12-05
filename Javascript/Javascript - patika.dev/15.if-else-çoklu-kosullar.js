// ********** ÇOKLU Koşullarla çalışmak ( if - else yapısı ) ********** //

let userName = prompt("Kullanıcı adınız:")
let age = prompt("Yaşınız:")
let info = document.querySelector("#info")

if (userName && age >= 18) {
    info.innerHTML = "Ehliyet alabilirsiniz."
} else if (!userName) {
    info.innerHTML = "Kullanıcı adınız yok."
} else if (!(age >= 18)) {
    info.innerHTML = "Yas bilginiz yok veya 18 yasından kücüksünüz."
}