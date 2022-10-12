const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert("SABIA QUE DIRIAS QUE SI JAJAJ")
    alert('ME REGUSTAS\n COMO NO TE LO IMAGINAS')
    alert("QUIERO SER EL CHICO QUE BORRE TODAS TUS INSEGUIRDADES\nYTE HAGA LA NIÑA MAS FELIZ DEL MUNDO\nPOR QUE TE LO MERECES")
    alert("ME ENAMORE DE LO MEJOR DE TI\nDE TU FORMA DE PENSAR, DE MIRAR, DE CONVERSAR")
    
    alert("NECESITABA CONFESARTELO")
    alert("INTENTO DISIMULARLO, PERO NO PUEDO")
    alert("PERO NO PASA NADA SI NO ES MUTUO")
    alert("PODEMOS SEGUIR SIENDO AMIGOS")
    alert("SOLO QUERIA QUE LO SUPIERAS")
    alert("NO PODIA ESTAR EL RESTO DE MI VIDA SIN DECIRLO")
    alert("ESPERO TU RESPUESTA :) ")
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
