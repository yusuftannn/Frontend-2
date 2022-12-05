function hello() {
    console.log("Merhaba");
    heloWorld();
}
function heloWorld() {
    console.log("Hello World");
}

function userCheck() {
    if (userName && age >= 18) {
        info.innerHTML = "Ehliyet alabilirsiniz."
    } else if (!userName) {
        info.innerHTML = "Kullanıcı adınız yok."
    } else if (!(age >= 18)) {
        info.innerHTML = "Yas bilginiz yok veya 18 yasından kücüksünüz."
    }
}


hello() // çalıştır
