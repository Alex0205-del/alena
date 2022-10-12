const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert("SABIA QUE DIRIAS QUE SI JAJAJ")
    alert('QUERIA CONFESARTE\n QUE ME REGUSTAS\n ')
    alert("QUIERO SER EL CHICO QUE BORRE TODAS TUS INSEGUIRDADES\nY TE HAGA LA NIÑA MAS FELIZ DEL MUNDO\nPOR QUE TE LO MERECES")
    alert("ME ENAMORE DE LO MEJOR DE TI\nDE TU FORMA DE PENSAR, DE MIRAR, DE CONVERSAR")
    alert("INTENTO DISIMULARLO, PERO NO PUEDO")
    alert("PERO NO PASA NADA SI NO ES MUTUO")
    alert("PODEMOS SEGUIR SIENDO AMIGOS SI GUSTAS")
    alert("SOLO QUERIA QUE LO SUPIERAS")
    alert("NO PODIA SEGUIR SIENDO UN COBARDE QUE OCULTA SUS SENTIMIENTOS")
    alert("TEN UN BUEN DIA :) :p")
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
