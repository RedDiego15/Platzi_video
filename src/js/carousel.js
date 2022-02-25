
import {addWholeTemplateCarousel_container} from './carousel-container';
import {create_indicators,numberOfPages} from './indicadores';

function createCarousel_info_content(title){
    const $carousel_info_content = document.createElement('div');
    const $carousel__title = document.createElement('h3');
    $carousel_info_content.classList.add('carousel__info-content');
    $carousel__title.classList.add('carousel__title');
    $carousel__title.innerText = title;
    $carousel_info_content.appendChild($carousel__title);
    return $carousel_info_content;

}
function templateLeftButton(){
    return(
    `<button role="button" class="flecha  flecha-izquierda" aria-label="Left Align" >
        <i class="fas fa-angle-left"></i>
    </button>`);
}
function templateRightButton(){
    return (
    `<button role="button" class="flecha  flecha-derecha" aria-label="right Align" >
        <i class="fas fa-angle-right"></i>
    </button>`);
}

const createButtonTemplate = (stringHtml,carousel)=>{
    const html = document.implementation.createHTMLDocument();
    const pageNumber = numberOfPages(carousel); 
    html.body.innerHTML = stringHtml;
    const $btn = html.body.children[0]
    $btn.addEventListener("click",e => {
        ($btn.classList.contains("flecha-derecha")?
        carousel.scrollLeft += pageNumber*carousel.offsetWidth:
        carousel.scrollLeft -= pageNumber*carousel.offsetWidth
        )
    })
    return $btn;
}



export  const addWholeTemplate = ({itemList=[]},title)=>{
    const $carousel_container__carousel= addWholeTemplateCarousel_container({itemList:itemList});
    const $carousel_container = document.querySelector('.carousel-container');
    const $carousel__info_content = createCarousel_info_content(title);
    const $carousel = document.createElement('section');
    const $carousel__list = document.createElement('div');
    const $indicators = create_indicators($carousel_container__carousel);
    const $left_button = createButtonTemplate(templateLeftButton(),$carousel_container__carousel);
    const $right_button = createButtonTemplate(templateRightButton(),$carousel_container__carousel);

    $carousel.classList.add('carousel');
    $carousel__list.classList.add('carousel__list')

    
    $carousel__info_content.appendChild($indicators);
    $carousel__list.appendChild($left_button);
    $carousel__list.appendChild($carousel_container__carousel);
    $carousel__list.appendChild($right_button);

    $carousel.appendChild($carousel__info_content);
    $carousel.appendChild($carousel__list)
    $carousel_container.appendChild($carousel);
}



