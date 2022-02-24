
const templateCarouselItem = ({ itemList = [] }) =>{
    itemList.map(({
        attributes: {titles,posterImage,slug,youtubeVideId,startDate}
    }) => {
        const template =
         `<div class="carousel-item">
            <figure class="item__img">
                <img src="${posterImage.medium} alt="img-movie">
            </figure>
            <div class="carousel-item__details">
                <div class="carousel-item__details--iconos">
                    <a href="${youtubeVideId}" class="details__icon">
                        <figure >
                            <img src="../src/assets//play-icon.png" alt="img-movie">
                        </figure>
                    </a>
                    <a href="${slug}" class="details__icon">
                        <figure >
                            <img src="../src/assets/plus-icon.png" alt="img-movie">
                        </figure>
                    </a>
                    
                </div>
                <p class="carousel-item__details--title">${titles.en}</p>
                <p class="carousel-item__details--sub-title">${titles.ja_jp}</p>
                <p class="carousel-item__details--date">${startDate}</p>
            </div>
        </div>`
        return template;


    })
   
    
}

const createCarousel_itemTemplate = ({itemList=[]}) => {
    const html = document.implementation.createHTMLDocument();
    const stringHtml = templateCarouselItem({itemList:itemList});
    html.body.innerHTML = stringHtml;
    return html.body.children[0];
}

export function addWholeTemplateCarousel_container({itemList}) {
    const $carousel_container__carousel = document.createElement('div');
    $carousel_container__carousel.classList.add('carousel-container__carousel');
    const $carousel_item = createCarousel_itemTemplate({itemList:itemList});
    $carousel_container__carousel.appendChild($carousel_item);
    return $carousel_container__carousel;
}