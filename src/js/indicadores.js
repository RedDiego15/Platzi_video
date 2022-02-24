const $indicadores = document.querySelector(".indicadores");
const $carousel = document.querySelector(".carousel-container__carousel");

const numberOfPages = function numberPages(){
    const $total_peliculas = document.querySelectorAll('.carousel-item')
    let numberPages;
    if(screen.width<600){
        numberPages=Math.ceil($total_peliculas.length/4)
        return numberPages;
    }else{
        numberPages=Math.ceil($total_peliculas.length/5)
        return numberPages;
    }
}

function pagination(){
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


