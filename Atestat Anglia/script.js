
///////////// Variabile /////////////

const home = document.querySelector("#home");
const detalii = document.querySelector("#detalii");
const obiective = document.querySelector("#obiective");
const galerie = document.querySelector("#galerie");

const elev = document.querySelector(".elev");
const details = document.querySelector(".details");
const obiectiveTuristice = document.querySelector(".obiective");
const gallery = document.querySelector(".galerie");

const btnAtractie1 = document.querySelector("#btn1");
const btnAtractie2 = document.querySelector("#btn2");
const btnAtractie3 = document.querySelector("#btn3");
const btnAtractie4 = document.querySelector("#btn4");
const btnAtractie5 = document.querySelector("#btn5");
const btnAtractie6 = document.querySelector("#btn6");
const btnAtractie7 = document.querySelector("#btn7");
const btnAtractie8 = document.querySelector("#btn8");
const btnAtractie9 = document.querySelector("#btn9");
const btnAtractie10 = document.querySelector("#btn10");
const btnAtractie11 = document.querySelector("#btn11");
const btnAtractie12 = document.querySelector("#btn12");

const atractie1 = document.querySelector("#a1");
const atractie2 = document.querySelector("#a2");
const atractie3 = document.querySelector("#a3");
const atractie4 = document.querySelector("#a4");
const atractie5 = document.querySelector("#a5");
const atractie6 = document.querySelector("#a6");
const atractie7 = document.querySelector("#a7");
const atractie8 = document.querySelector("#a8");
const atractie9 = document.querySelector("#a9");
const atractie10 = document.querySelector("#a10");
const atractie11 = document.querySelector("#a11");
const atractie12 = document.querySelector("#a12");


///////////// Butoane Principale /////////////

home.addEventListener('click', function(){
    if(elev.style.display = 'none'){
        elev.style.display = 'inline';
        details.style.display = 'none';
        obiectiveTuristice.style.display = 'none';
        gallery.style.display = 'none';
    }
})

detalii.addEventListener('click', function(){
    if(details.style.display = 'none'){
        elev.style.display = 'none';
        details.style.display = 'inline';
        obiectiveTuristice.style.display = 'none';
        gallery.style.display = 'none';
    }
})

obiective.addEventListener('click', function(){
    if(obiectiveTuristice.style.display = 'none'){
        elev.style.display = 'none';
        details.style.display = 'none';
        obiectiveTuristice.style.display = 'flex';
        gallery.style.display = 'none';
        atractie2.style.display = 'none';
    atractie3.style.display = 'none';
    atractie4.style.display = 'none';
    atractie5.style.display = 'none';
    atractie6.style.display = 'none';
    atractie7.style.display = 'none';
    atractie8.style.display = 'none';
    atractie9.style.display = 'none';
    atractie10.style.display = 'none';
    atractie11.style.display = 'none';
    atractie12.style.display = 'none';
    }
})

galerie.addEventListener('click', function(){
    if(gallery.style.display = 'none'){
        elev.style.display = 'none';
        details.style.display = 'none';
        obiectiveTuristice.style.display = 'none';
        gallery.style.display = 'grid';
    }
})

///////////// Obiective Turistice ///////////// 

btnAtractie1.addEventListener('click', function(){
    atractie1.style.display = 'flex';
    atractie2.style.display = 'none';
    atractie3.style.display = 'none';
    atractie4.style.display = 'none';
    atractie5.style.display = 'none';
    atractie6.style.display = 'none';
    atractie7.style.display = 'none';
    atractie8.style.display = 'none';
    atractie9.style.display = 'none';
    atractie10.style.display = 'none';
    atractie11.style.display = 'none';
    atractie12.style.display = 'none';
})

btnAtractie2.addEventListener('click', function(){
    atractie1.style.display = 'none';
    atractie2.style.display = 'flex';
    atractie3.style.display = 'none';
    atractie4.style.display = 'none';
    atractie5.style.display = 'none';
    atractie6.style.display = 'none';
    atractie7.style.display = 'none';
    atractie8.style.display = 'none';
    atractie9.style.display = 'none';
    atractie10.style.display = 'none';
    atractie11.style.display = 'none';
    atractie12.style.display = 'none';
})

btnAtractie3.addEventListener('click', function(){
    atractie1.style.display = 'none';
    atractie2.style.display = 'none';
    atractie3.style.display = 'flex';
    atractie4.style.display = 'none';
    atractie5.style.display = 'none';
    atractie6.style.display = 'none';
    atractie7.style.display = 'none';
    atractie8.style.display = 'none';
    atractie9.style.display = 'none';
    atractie10.style.display = 'none';
    atractie11.style.display = 'none';
    atractie12.style.display = 'none';
})

btnAtractie4.addEventListener('click', function(){
    atractie1.style.display = 'none';
    atractie2.style.display = 'none';
    atractie3.style.display = 'none';
    atractie4.style.display = 'flex';
    atractie5.style.display = 'none';
    atractie6.style.display = 'none';
    atractie7.style.display = 'none';
    atractie8.style.display = 'none';
    atractie9.style.display = 'none';
    atractie10.style.display = 'none';
    atractie11.style.display = 'none';
    atractie12.style.display = 'none';
})

btnAtractie5.addEventListener('click', function(){
    atractie1.style.display = 'none';
    atractie2.style.display = 'none';
    atractie3.style.display = 'none';
    atractie4.style.display = 'none';
    atractie5.style.display = 'flex';
    atractie6.style.display = 'none';
    atractie7.style.display = 'none';
    atractie8.style.display = 'none';
    atractie9.style.display = 'none';
    atractie10.style.display = 'none';
    atractie11.style.display = 'none';
    atractie12.style.display = 'none';
})

btnAtractie6.addEventListener('click', function(){
    atractie1.style.display = 'none';
    atractie2.style.display = 'none';
    atractie3.style.display = 'none';
    atractie4.style.display = 'none';
    atractie5.style.display = 'none';
    atractie6.style.display = 'flex';
    atractie7.style.display = 'none';
    atractie8.style.display = 'none';
    atractie9.style.display = 'none';
    atractie10.style.display = 'none';
    atractie11.style.display = 'none';
    atractie12.style.display = 'none';
})

btnAtractie7.addEventListener('click', function(){
    atractie1.style.display = 'none';
    atractie2.style.display = 'none';
    atractie3.style.display = 'none';
    atractie4.style.display = 'none';
    atractie5.style.display = 'none';
    atractie6.style.display = 'none';
    atractie7.style.display = 'flex';
    atractie8.style.display = 'none';
    atractie9.style.display = 'none';
    atractie10.style.display = 'none';
    atractie11.style.display = 'none';
    atractie12.style.display = 'none';
})

btnAtractie8.addEventListener('click', function(){
    atractie1.style.display = 'none';
    atractie2.style.display = 'none';
    atractie3.style.display = 'none';
    atractie4.style.display = 'none';
    atractie5.style.display = 'none';
    atractie6.style.display = 'none';
    atractie7.style.display = 'none';
    atractie8.style.display = 'flex';
    atractie9.style.display = 'none';
    atractie10.style.display = 'none';
    atractie11.style.display = 'none';
    atractie12.style.display = 'none';
})

btnAtractie9.addEventListener('click', function(){
    atractie1.style.display = 'none';
    atractie2.style.display = 'none';
    atractie3.style.display = 'none';
    atractie4.style.display = 'none';
    atractie5.style.display = 'none';
    atractie6.style.display = 'none';
    atractie7.style.display = 'none';
    atractie8.style.display = 'none';
    atractie9.style.display = 'flex';
    atractie10.style.display = 'none';
    atractie11.style.display = 'none';
    atractie12.style.display = 'none';
})

btnAtractie10.addEventListener('click', function(){
    atractie1.style.display = 'none';
    atractie2.style.display = 'none';
    atractie3.style.display = 'none';
    atractie4.style.display = 'none';
    atractie5.style.display = 'none';
    atractie6.style.display = 'none';
    atractie7.style.display = 'none';
    atractie8.style.display = 'none';
    atractie9.style.display = 'none';
    atractie10.style.display = 'flex';
    atractie11.style.display = 'none';
    atractie12.style.display = 'none';
})

btnAtractie11.addEventListener('click', function(){
    atractie1.style.display = 'none';
    atractie2.style.display = 'none';
    atractie3.style.display = 'none';
    atractie4.style.display = 'none';
    atractie5.style.display = 'none';
    atractie6.style.display = 'none';
    atractie7.style.display = 'none';
    atractie8.style.display = 'none';
    atractie9.style.display = 'none';
    atractie10.style.display = 'none';
    atractie11.style.display = 'flex';
    atractie12.style.display = 'none';
})

btnAtractie12.addEventListener('click', function(){
    atractie1.style.display = 'none';
    atractie2.style.display = 'none';
    atractie3.style.display = 'none';
    atractie4.style.display = 'none';
    atractie5.style.display = 'none';
    atractie6.style.display = 'none';
    atractie7.style.display = 'none';
    atractie8.style.display = 'none';
    atractie9.style.display = 'none';
    atractie10.style.display = 'none';
    atractie11.style.display = 'none';
    atractie12.style.display = 'flex';
})