// ********** Array (dizilerle çalışmak) ********** //

// Array oluşturmak
let domain = "yetki"
let isActive = false
let items = [1, 2, 3, isActive, domain]
console.log(items)
// Array içerisindeki eleman/oge sayisini ogrenmek

document.querySelector('#info').innerHTML = items.length

// Array içindeki ilk elemanın çagırılması
console.log(items[0])
// Array içindeki son elemanın çağırılması
console.log(items[items.length - 1])
// Değişken içindeki bilginin Array olup olmadığının kontrol edilmesi

console.log(
    Array.isArray(items)
)

// hangileri isArray -> True verir ? 
console.log("[] : ", Array.isArray([]))
console.log("1 : ", Array.isArray(1))
console.log("true : ", Array.isArray(true))


