// ********** DOM ETKİNLİKLERİYLE ÇALIŞMAK ********** //

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)        // --> click" yerine "mouseover" yazarak (imleci üzerine getirdiğimizde rengi değişir)

function domClick() {
    console.log("tiklandi");
    if (this.style.color == "red") {
        this.style.color = "black";
    } else {
        this.style.color = "red";
    }
}