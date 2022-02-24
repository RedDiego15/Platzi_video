
import {addWholeTemplateCarousel_container} from './carousel-container';

function templateLeftButton(){
    return(
    `<button role="button" id="flecha-izquierda" class="flecha  flecha-izquierda" aria-label="Left Align" >
        <i class="fas fa-angle-left"></i>
    </button>`);
}
function templateRightButton(){
    return (
    `<button role="button" id="flecha-derecha" class="flecha  flecha-derecha" aria-label="right Align" >
        <i class="fas fa-angle-right"></i>
    </button>`);
}

const createButtonTemplate = (stringHtml)=>{
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = stringHtml;
    return html.body.children[0];
}

export const addWholeTemplate = ({itemList=[]})=>{
    const $carousel_container = document.querySelector('.carousel-container');
    const $carousel = document.createElement('section');
    const $carousel__info_content = document.createElement('div');
    const $carousel__list = document.createElement('div');
    const $carousel_container__carousel= addWholeTemplateCarousel_container({itemList:itemList});

    $carousel.classList.add('carousel');
    $carousel__info_content.classList.add('carousel__info-content');
    $carousel__list.classList.add('carousel__list')



    const $left_button = createButtonTemplate(templateLeftButton());
    const $right_button = createButtonTemplate(templateRightButton());
    $carousel__list.appendChild($left_button);
    $carousel__list.appendChild($carousel_container__carousel);
    $carousel__list.appendChild($right_button);
    $carousel.appendChild($carousel__info_content);
    $carousel.appendChild($carousel__list)
    $carousel_container.appendChild($carousel);

}



