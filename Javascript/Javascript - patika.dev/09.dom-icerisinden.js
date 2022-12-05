// DOM İÇİNDEN ÖĞE SEÇİMİ //

let title = document.getElementById('title')
console.log(title.innerHTML)
title.innerHTML = "Degisen Bilgi"   // üstteki title yerine "" içindeki metin ile değiştirildi.
console.log(title.innerHTML)

//let link = document.querySelector("ul#list>li>a")
let link = document.querySelector("#listlink")  // a href id si
link.innerHTML += " degisti"
link.style.color = "red"    // a href e style ekleyip red yaptı.
link.classList.add('btn')   // a href e btn classı ekledi