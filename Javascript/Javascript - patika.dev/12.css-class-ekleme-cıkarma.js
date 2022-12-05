// ********** css class eklemek veya çıkartmak ********** //

let greeting = document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("new-info", "second-class", "third-class")    // birden çok class eklemek istersek.

greeting.classList.remove("text-primary")       // silmek için

console.log(greeting.classList)
