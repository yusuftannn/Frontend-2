// ********** Koşullarla çalışmak ( if - else yapısı ) ********** //

let userName = prompt("Kullanıcı adını giriniz:")

// userName.Length kodu 5ten büyük ve eşitse
if (userName.length >= 5 && !parseInt(userName)) {       // 5e eşit yada büyük veya sayıya dönüştürmüyorsa
    console.log(`Kullanıcı adınız: ${userName}`)
} else {
    console.log("Bilgi yok.")
}
