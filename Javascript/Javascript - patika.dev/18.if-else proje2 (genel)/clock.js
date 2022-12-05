let myname = prompt("İsminiz?")
let inName = document.querySelector("#myName")
inName.innerHTML = `${myname.charAt(0).toUpperCase() + myname.slice(1)}`

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }


    var time = h + ":" + m + ":" + s;
    document.getElementById("myClock").innerText = time;

    setTimeout(showTime, 1000); //sn de bir yeniler

}

showTime();