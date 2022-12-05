// ********** Liste içerisindeki son elemana ulaşmak veya eleman eklemek ********** //

let lastChild = document.querySelector("ul#list>li:last-child")  // last yerine first-child yazarak ilk elemana ulaşılır.
lastChild.innerHTML = "değiştirildi"

let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

liDOM.innerHTML = "Kendi oluşturduğumuz öğe"

ulDOM.append(liDOM)     // SON EKLEME

ulDOM.prepend(liDOM)    // BAŞA EKLEME
