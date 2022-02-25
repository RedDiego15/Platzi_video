
export function numberOfPages(carousel) {
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
    const number_Pages = numberOfPages(carousel);

    for(let i=0;i<number_Pages;i++){
        const indicator = document.createElement('button');
        if(i==0){
            indicator.classList.add('activo')
            indicator.ariaLevel = 'Indicator of website'
        }
        indicadores.appendChild(indicator)
        indicator.addEventListener('click', e=>{
            carousel.scrollLeft= i*carousel.offsetWidth
            indicadores.querySelector('.activo').classList.remove('activo')
            e.target.classList.add('activo')
            
        })  
    }
}

export const create_indicators = (carousel_container__carousel)=>{
    const $indicadores = document.createElement('div');
    $indicadores.classList.add('indicadores');
    pagination($indicadores,carousel_container__carousel);
    return $indicadores;





}

