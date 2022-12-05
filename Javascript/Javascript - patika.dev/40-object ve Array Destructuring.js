// ********** Object ve Array Destructuring ********** //

// Object Destructuring //

let settings = {
    userName: "Yusuf",
    password: "1234",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "yusuftan.com"
}

// obje içindeki bilgilerin tek seferde çıkarılması //

// let userName = settings.userName
// console.log(userName)

// rename && destructuring //
let { userName: user, password, isActive, ip: serverIP, serverName } = settings;
console.log(user, password, isActive, serverIP, serverName);
console.log(settings);
console.log(user);

// obje içindeki bazı bilgilerin çıkarılması //
let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings;
console.log("settings: ", settings)

// objenin destructuring ile kopyalanması //
let settings2 = { ...settings }
settings2.userName = "Degisen Bilgi"
console.log("settings", settings);
console.log("setting2", settings2);

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore);

// object kopyalama ile aynı -->>  let setting2 = {...settings}
let copyOfScore = [...score]
console.log("copyScore: ", copyOfScore);

// ÖNEMLİ NOT !!
// [] = bir dizi olduğu {} = bir object olduğu nu anlarız. //