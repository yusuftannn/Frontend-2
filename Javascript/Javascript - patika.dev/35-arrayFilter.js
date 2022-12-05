// ********** Array Filter Kullanımı ********** //


// 5 harften fazla olanlar
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)

// aktif kullanıcılar ??
const USERS = [
    { fullName: "ASD ASD", isActive: false },
    { fullName: "FGH HJK", isActive: true },
    { fullName: "WER TYI", isActive: true },
    { fullName: "UIO LMN", isActive: false },
]
const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
console.log(ACTIVE_USERS)