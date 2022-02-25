
const numberOfPages = function numberPages(carousel) {
    const $total_peliculas = carousel.querySelectorAll('.carousel-item')
    let numberPages;
    if(screen.width<600){
        numberPages=Math.ceil($total_peliculas.length/4)
        return numberPages;
    }else{
        numberPages=Math.ceil($total_peliculas.length/5)
        return numberPages;
    }
}

function pagination(indicadores,carousel){
    const number_Pages = numberOfPages();

    for(let i=0;i<number_Pages;i++){
        const indicator = document.createElement('button');
        if(i==0){
            indicator.classList.add('activo')
        }
        indicadores.appendChild(indicator)
        indicator.addEventListener('click', e=>{
            carousel.scrollLeft= i*carousel.offsetWidth
            indicadores.querySelector('.activo').classList.remove('activo')
            e.target.classList.add('activo')
            
        })  
    }
}

function giveScroll(indicadores){
    const $carousel_container__carousel = document.querySelectorAll('.carousel-container__carousel');
    for (let carousel of $carousel_container__carousel){
        pagination(indicadores,carousel)
    }

}

export const create_indicators = ()=>{
    const $indicadores = document.createElement('div');
    $indicadores.classList.add('indicadores');
    giveScroll($indicadores);
    return $indicadores;





}

