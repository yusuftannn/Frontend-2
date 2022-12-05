// ********** Form Submit Yönetimi ********** //

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)          // ne zaman yapmasını istediğimiz = submit olduğunda

function formSubmit(event) {
    event.preventDefault()      // default işlemini yapma 
    console.log("islem gerçekleşti.")
    let scoreInputDOM = document.querySelector('#score')    // input içerisinden değer almak
    console.log(scoreInputDOM.value)
    localStorage.setItem('score', scoreInputDOM.value)      // sağ tık incele -> application -> Local Storage
}   