let price = "100"
let user = "guest"

// == Eşitse
console.log(price == 1)       // false yazdı
console.log(price == 100)     // true yazdı

// === Hem değeri hem türü eşitse 
console.log(price === 1)      // false yazdı
console.log(price === 100)    // false yazdı  çünkü; türü farklı

// != Eşit değilse 
console.log(price != 1)       // true yazdı
console.log(price != 100)     // false yazdı

// < Küçükse 
console.log(price < 100)       // false yazdı
// <= Küçük veya eşitse
// > büyükse

// && ve
price = 0
console.log("&& ve:", price > 0 && user != "guest")

// || veya
console.log("|| veya:", price > 0 || user != "guest")

// ! değil (tersi)
user = "guest"
price = 1
console.log("! değil (tersi):", price > 0 && !user == "guest")




