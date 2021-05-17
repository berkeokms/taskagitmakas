var resimler = ["url(paper.png)", "url(scissors.png)", "url(rock.png)"];

var start = document.getElementById("start");

var tas = document.getElementById("tas");

var kagıt = document.getElementById("kagıt");

var makas = document.getElementById("makas");

var a, b;

function random() {

    var r = Math.round(Math.random() * 2);
    return r;
}
 
function yerlestir() {

    b = resimler[random()];

    document.getElementById("resim2").style.backgroundImage = b;
}

function hesapla() {

    var x = Number(document.getElementById("skor1").innerHTML);

    var y = Number(document.getElementById("skor2").innerHTML);

    if (a == "url(paper.png)" && b == "url(scissors.png)")
        document.getElementById("skor2").innerHTML = y + 1;
    else if (a == "url(paper.png)" && b == "url(rock.png)")
        document.getElementById("skor1").innerHTML = x + 1;
    else if (a == "url(scissors.png)" && b == "url(paper.png)")
        document.getElementById("skor1").innerHTML = x + 1
    else if (a == "url(scissors.png)" && b == "url(rock.png)")
        document.getElementById("skor2").innerHTML = y + 1;
    else if (a == "url(rock.png)" && b == "url(scissors.png)")
        document.getElementById("skor1").innerHTML = x + 1;
    else if (a == "url(rock.png)" && b == "url(paper.png)")
        document.getElementById("skor2").innerHTML = y + 1;

}

function durum() {

    var x = Number(document.getElementById("skor1").innerHTML);

    var y = Number(document.getElementById("skor2").innerHTML);

    if (x == 5) {
        setInterval(() => {

            document.getElementById("ss").innerHTML = "Player 1 Kazandı";

            setTimeout(() => {
                document.getElementById("ss").innerHTML = "";
            }, 1000);
        }, 2000);

    }
    if (y == 5) {
        setInterval(() => {
            document.getElementById("ss").innerHTML = "Player 2 Kazandı";
            setTimeout(() => {
                document.getElementById("ss").innerHTML = "";
            }, 1000);
        }, 2000);

    }

}

function renk() {

    var x = Number(document.getElementById("skor1").innerHTML);

    var y = Number(document.getElementById("skor2").innerHTML);

    if (x > y) {
        document.getElementById("skor1").style.backgroundColor = "#1a4301";
        document.getElementById("skor2").style.backgroundColor = "#b7094c";
    } else if (x < y) {
        document.getElementById("skor1").style.backgroundColor = "#b7094c";
        document.getElementById("skor2").style.backgroundColor = "#1a4301";
    } else if (x == y) {
        document.getElementById("skor1").style.backgroundColor = "#f9c74f";
        document.getElementById("skor2").style.backgroundColor = "#f9c74f";
    }

}

tas.onclick = () => {
    var x = Number(document.getElementById("skor1").innerHTML);

    var y = Number(document.getElementById("skor2").innerHTML);
    if (x == 5 || y == 5) {

    } else if (x != 5 || y != 5) {
        a = resimler[2];
        document.getElementById("resim1").style.backgroundImage = a;
        random();
        yerlestir();
        hesapla();
        durum();
        renk();
    }
}
makas.onclick = () => {

    var x = Number(document.getElementById("skor1").innerHTML);

    var y = Number(document.getElementById("skor2").innerHTML);
    if (x == 5 || y == 5) {

    } else if (x != 5 || y != 5) {
        a = resimler[1];
        document.getElementById("resim1").style.backgroundImage = a;
        random();
        yerlestir();
        hesapla();
        durum();
        renk();
    }
}
kagıt.onclick = () => {
    

    var x = Number(document.getElementById("skor1").innerHTML);

    var y = Number(document.getElementById("skor2").innerHTML);
    if (x == 5 || y == 5) {

    } else if (x != 5 || y != 5) {
        a = resimler[0];
        document.getElementById("resim1").style.backgroundImage = a;
        random();
        yerlestir();
        hesapla();
        durum();
        renk();
    }
}

