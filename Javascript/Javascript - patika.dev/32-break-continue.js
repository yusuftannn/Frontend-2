// ********** BREAK && CONTİNUE ********** //
// break : buna kadar gel.
// continue: bunu atla.

const LOREM_LIST = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing']

let counter = 0;

// ********** BREAK ********** //
// for (; counter < 10; counter++) {
//     if (counter == 5) {break} {
//         console.log(counter)
//     }
// }
// ********** CONTİNUE ********** //
// for (; counter < 10; counter++) {
//     if (counter == 5) {continue} {
//         console.log(counter)
//     }
// }

// ********** CONTİNUE ********** //
for (; counter < 10; counter++) {
    if (counter == 5) { continue } {
        console.log(counter)
    }
}


const UL_DOM = document.querySelector('#userList')

let index = 0;

// ********** BREAK ********** //
// for (; index < LOREM_LIST.length; index++) {
//     if (LOREM_LIST[index] == "dolor") {break} 
//     let Lİ_DOM = document.createElement('li');
//     Lİ_DOM.innerHTML = LOREM_LIST[index];
//     UL_DOM.append(Lİ_DOM);  
// }

// ********** CONTİNUE ********** //
for (; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == "dolor") { continue }
    let Lİ_DOM = document.createElement('li');
    Lİ_DOM.innerHTML = LOREM_LIST[index];
    UL_DOM.append(Lİ_DOM);
}