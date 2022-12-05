let userName = "yusuf"
const DOMAIN = "sporistik.com"

let email = userName + "@" + DOMAIN

// console.log("Merhaba", userName, "Sitemize hoşgeldin", "E-Mail adresin:", email)

let info = `
Merhaba ${userName} sitemize hoşgeldin..
mail adresin ${email}
mail adresinin uzunulugu ${email.length} 
günün saat bilgisi: ${new Date().getHours()}

kısa isminiz: ${userName[0]}

`
console.log(info)