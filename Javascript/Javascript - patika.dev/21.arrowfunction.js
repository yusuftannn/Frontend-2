// ********** ARROW FUNCTİON ********** //


function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello("JavaScript")

const helloFuncV1 = firstName => { console.log(`Merhaba ${firstName}`) };    // bir parametre(firstName deki) varsa paranteze almaya gerek yoktur  
helloFuncV1("helloFuncV1")


const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`);       // bir return(geri dönüş yani consol.log kodu) varsa  süslü paranteze almaya gerek yoktur.
helloFuncV2("helloFuncV2");

const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`) // birden fazla parametre kullanılacaksa () içine alınır.
helloFuncV3("helloFuncV3", "lastName");

const helloFuncV4 = (firstName, lastName) => {          // birdne fazla return olduğu için süslü parantez.
    let info = `Merhaba ${firstName} ${lastName}`;
    console.log(info)
    return info
}

helloFuncV4("helloFuncV4", "Other Info");