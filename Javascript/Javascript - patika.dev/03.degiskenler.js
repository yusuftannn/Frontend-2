// number veri türü //
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price,
    "KDV Oranı", tax,
    "KDV Tutarı", priceTax,
    "Toplam", total
)

let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constractor içine bilgi gönderildi:", Number("111"))

// arrtırma ve azaltma işlemleri //

// arttırma //
let counter = 320
counter = counter + 1   // 1.yol
counter += 1            // 2.yol
counter++              // 3.yol
console.log(counter)

// azaltma //
counter--
counter -= 1
console.log(counter)

counter *= 10
console.log(counter)

counter /= 2
console.log(counter)

// işlem önceliği //
console.log(2 + 3 * 10)     // 32
console.log((2 + 3) * 10)   // 50

// mod(kalan) alma % //
console.log(17 % 3)   // kalan 2      -- bölümden kalanı gösterir

// üs alma ** //
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)

// aşağı yuvarlama işlemi -> Math.floor 
console.log("Aşağı yuvarlama", Math.floor(1.9))
// yukarı yuvarlama işlemi -> Math.ceil
console.log("Yukarı yuvarlama", Math.ceil(1.9))
// yakına yuvarlama işlemi -> Math.round
console.log("Yakına yuvarlamaa", Math.round(1.4))


