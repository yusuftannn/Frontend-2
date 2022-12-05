let email = "yusuftan41@hotmail.com"
let firstName = "Yusuf"
let lastName = "Tan"

// büyük harf - küçük harf //
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

// search //
console.log(email.search("@"))
console.log(email[10])

email.search("olmayan") // -1 sonucu gelir.

// belli bir yere kadar al -> slice //      - domain bilgisi
console.log(email.slice(0, 10))      // yusuftan41       yazar
console.log(email.slice(10))        // @hotmail.com     yazar

// bilgiyi değiştir -> replace //
email = email.replace('hotmail.com', 'gmail.com')       // hotmail.com u    "gmail.com" yaptı.
console.log(email)

// istediğim bilgi var mı -> includes //
email = email.includes("@gmail")    //  true - false // var yada yok 
console.log(email)

// istediğim bilgiyle başladı mı ? bitti mi ? -> startsWidth, endsWidth : //


// ilk harflerini büyük yapmak // 
firstName = "FIRST"
lastName = "LAST"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName)
