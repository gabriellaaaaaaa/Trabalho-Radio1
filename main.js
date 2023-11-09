function tocaSom (idElementoAudio){
    document.querrySelector(idElementoAudio).play();
}
const listaDeTeclas= document.querrySelectorALL(".tecla");

let contador=0
while (contador<listaDeTeclas.length){
    const efeito=listaDeTeclas[contador].classList[1];
    const idAudio= '#som_' +efeito;
    listaDeTeclas[contador].onclick=fuction(){
        tocaSom(idAudio);
    }
    contador= contador+1;
    console.log(contador);
}